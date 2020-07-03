import os
import random
from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator
from django.db.models.signals import pre_save, post_save

from resale_projects.utils import unique_slug_generator

User = get_user_model()

'''
Here i will add custom model manager for advanced custom query
'''


class Member(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=20, blank=True, null=True)
    member = models.BooleanField(default=False, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    remember_data = models.BooleanField(default=False)

    def __str__(self):
        return self.user.id


class Products(models.Model):
    user = models.ForeignKey(Member, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    category = models.CharField(max_length=20, blank=True, null=True)
    description = models.TextField(max_length=255)
    slug = models.SlugField(blank=True, null=True)
    image = models.ImageField(blank=True, null=True,
                              upload_to='media/products/%Y/%m/%d/')
    phone_regex = RegexValidator(
        regex='^(\+\d{1,3})?,?\s?\d{8,13}', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(
        validators=[phone_regex], max_length=17, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    product_price = models.IntegerField()
    negotiable = models.BooleanField(default=True, blank=True, null=True)
    used = models.BooleanField(default=False)
    used_duration = models.PositiveIntegerField(blank=True, null=True)
    division = models.CharField(max_length=10, blank=True, null=True)
    zilla = models.CharField(max_length=10, blank=True, null=True)
    thana = models.CharField(max_length=10, blank=True, null=True)
    zip_code = models.IntegerField()
    is_sold = models.BooleanField(default=False, blank=True, null=True)
    featured = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'All Products'
        ordering = ['id']

    def __str__(self):
        return self.title


def unique_slug_generator_reciever(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(unique_slug_generator_reciever, sender=Products)


def unique_slug_generator_member_reciever(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = random.randint(1254, 645465)


pre_save.connect(unique_slug_generator_member_reciever, sender=Member)


def member_profile_creator(sender, instance, created, *args, **kwargs):
    if created:
        memberprofile = Member.objects.create(user=instance)


post_save.connect(member_profile_creator, sender=User)

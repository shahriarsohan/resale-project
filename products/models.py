import os
import random
from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator
from django.db.models.signals import pre_save

from resale_projects.utils import unique_slug_generator

User = get_user_model()


class Member(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    member = models.BooleanField(default=False, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)

    def __str__(self):
        return self.user.email


class Category(models.Model):
    title = models.CharField(max_length=10)
    slug = models.SlugField(blank=True, null=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ['-id']

    def __str__(self):
        return self.title


class Products(models.Model):
    user = models.ForeignKey(Member, on_delete=models.CASCADE)
    category = models.OneToOneField(
        Category, on_delete=models.DO_NOTHING, null=True)
    title = models.CharField(max_length=30)
    description = models.TextField(max_length=255)
    slug = models.SlugField(blank=True, null=True)
    image = models.ImageField(blank=True, null=True)
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

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'All Products'
        ordering = ['-timestamp']

    def __str__(self):
        return self.title


def unique_slug_generator_reciever(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(unique_slug_generator_reciever, sender=Products)


def unique_category_slug_generator_reciever(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(unique_category_slug_generator_reciever, sender=Category)


def unique_slug_generator_member_reciever(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = random.randint(1254, 645465)


pre_save.connect(unique_slug_generator_member_reciever, sender=Member)

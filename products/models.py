import os
import random
from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator

User = get_user_model()


class Category(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Products(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
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

    used = models.BooleanField(default=False)
    used_duration = models.PositiveIntegerField(blank=True, null=True)
    division = models.CharField(max_length=10, blank=True, null=True)
    zills = models.CharField(max_length=10, blank=True, null=True)
    thana = models.CharField(max_length=10, blank=True, null=True)
    zip_code = models.IntegerField()
    is_solf = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return self.title

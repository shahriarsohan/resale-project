from django.db import models
from django.contrib.auth import get_user_model
from products.models import Products, Member


class OrderItem(models.Model):
    user = models.OneToOneField(Member, on_delete=models.CASCADE)
    ordered = models.BooleanField(default=False)
    item = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        if self.user.username is None:
            return f"{self.user.user.email} ordered {self.item.title}"
        return f"{self.user.username} ordered {self.item.title}"

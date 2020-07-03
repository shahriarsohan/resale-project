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


class Order(models.Model):
    user = models.ForeignKey(Member, on_delete=models.CASCADE)
    item = models.ForeignKey(OrderItem, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)

    def __str__(self):
        if self.user.username is None:
            return f"{self.user.user.email} ordered {self.item.item.title}"
        return f"{self.user.username} ordered {self.item.item.title}"

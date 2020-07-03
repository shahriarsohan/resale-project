from rest_framework import serializers
from products.api.serializers import (
    MemberSerializers,
    ProductsSerializers,
)

from orders.models import Order, OrderItem


class OrderItemSerializers(serializers.ModelSerializer):
    user = MemberSerializers()
    item = ProductsSerializers()

    class Meta:
        model = OrderItem
        fields = [
            'user',
            'ordered',
            'item',
            'quantity'
        ]


class OrdersSerializers(serializers.ModelSerializer):
    user = MemberSerializers()
    item = OrderItemSerializers()

    class Meta:
        model = Order
        fields = [
            'user',
            'item',
            'start_date',
            'ordered_date',
            'ordered',
            'delivered',
        ]

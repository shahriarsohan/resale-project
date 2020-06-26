from django.contrib.auth import get_user_model

from rest_framework import serializers

from products.models import (
    Member,
    Products
)

User = get_user_model()


class UserSerializers(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            'email',
            'is_staff',
            'is_active',
            'date_joined',
            'last_login'
        ]


class MemberSerializers(serializers.ModelSerializer):
    user = UserSerializers()

    class Meta:
        model = Member
        depth = 1
        fields = [
            'user',
            'member',
            'slug'
        ]


class ProductsSerializers(serializers.ModelSerializer):
    user = MemberSerializers()

    class Meta:
        model = Products
        fields = [
            'user',
            'category',
            'title',
            'description',
            'slug',
            'image',
            'phone_number',
            'timestamp',
            'product_price',
            'negotiable',
            'used',
            'used_duration',
            'division',
            'zilla',
            'thana',
            'zip_code',
            'is_sold',
            'featured'
        ]

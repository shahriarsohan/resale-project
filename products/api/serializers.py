from django.contrib.auth import get_user_model

from rest_framework import serializers

from products.models import (
    Member,
    Category
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


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'title',
            'slug'
        ]

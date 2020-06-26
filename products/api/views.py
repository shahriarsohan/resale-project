from django.contrib.auth import get_user_model

from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from .serializers import (
    UserSerializers,
    MemberSerializers,
    ProductsSerializers
)

from products.models import (
    Member,
    Products
)

User = get_user_model()


class UsersListAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [IsAdminUser]


class MembersListAPIView(ListAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializers
    permission_classes = [IsAuthenticated]


class ProductsListAPIView(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializers

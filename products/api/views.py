from django.contrib.auth import get_user_model
from django.db.models import Q

from rest_framework.views import APIView

from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView
)
from rest_framework.permissions import (
    IsAdminUser,
    IsAuthenticated
)

from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_404_NOT_FOUND
)
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


class ProductsListAPIView(ListAPIView):
    queryset = Products.objects.filter(featured=False)
    serializer_class = ProductsSerializers


class FeaturedProductsListView(ListAPIView):
    queryset = Products.objects.filter(featured=True)
    serializer_class = ProductsSerializers


class FeaturedProductsDetails(RetrieveAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializers
    lookup_field = 'slug'


class FeaturedProductsFilter(APIView):
    def get(self, request, *args, **kwargs):
        data = Products.objects.filter(featured=True)
        serializer = ProductsSerializers(data, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        title = request.data.get('title', None)
        category = request.data.get('category', None)
        thana = request.data.get('thana', None)
        zilla = request.data.get('zilla', None)
        product_price_from = request.data.get('product_price_from', None)
        product_price_to = request.data.get('product_price_to', None)

        if product_price_from is None:
            product_price_from = int(0)

        if product_price_to is None:
            product_price_to = int(10000000000)

        filter = Products.objects.filter(
            Q(featured=True),
            Q(title__contains=title),
            Q(category__iexact=category) |
            Q(thana__iexact=thana) |
            Q(zilla=zilla) |
            Q(product_price__gte=product_price_from) |
            Q(product_price__lte=product_price_to)
        )
        serializer = ProductsSerializers(filter, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
# Tip : icontains doesnot work with None values

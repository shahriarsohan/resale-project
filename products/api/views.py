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

    # def post(self, request, *args, **kwargs):
    #     title = request.data.get('title', None)
    #     category = request.data.get('category', None)
    #     area = request.data.get('thana', None)
    #     zilla = request.data.get('zilla', None)
    #     used = request.data.get('used', None)

    #     filter = Products.objects.get(Q(title__icontains=title) | Q(category__icontains=category) | Q(
    #         area__iexact=area) | Q(zilla__iexact=zilla) | Q(used=used))
    #     serializer = ProductsSerializers(filter, many=True)
    #     return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        title = request.data.get('title', None)
        category = request.data.get('category', None)
        thana = request.data.get('thana', None)
        zilla = request.data.get('zilla', None)
        used = request.data.get('used', None)

        data = Products.objects.filter(
            title__icontains=title,
            category__icontains=category,
            thana__iexact=thana,
            zilla__iexact=zilla,

        )

        serializer = ProductsSerializers(data, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

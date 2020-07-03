
from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.generics import (
    ListAPIView
)


from rest_framework.permissions import (
    IsAdminUser,
    IsAuthenticated
)

from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_404_NOT_FOUND,
    HTTP_400_BAD_REQUEST
)

from .serializers import (
    OrderItemSerializers,
    OrdersSerializers
)

from products.models import Products

from orders.models import (
    Order,
    OrderItem
)


class AddToCartAPIView(APIView):
    def post(self, request, *args, **kwargs):
        print(request.user.is_authenticated)
        # slug = request.data.get('slug', None)
        # if slug is None:
        #     return Response({"message": "Somthing went wrong"}, status=HTTP_400_BAD_REQUEST)
        # item = get_object_or_404(Products, slug=slug)
        # order_item_qs = OrderItem.objects.filter(
        #     item=item,
        #     user=request.user.member,
        #     ordered=False
        # )

        # if order_item_qs.exists():
        #     order_item = order_item_qs.first()
        #     order_item.quantity += 1
        #     order_item.save()
        # else:
        #     order_item = OrderItem.objects.create(
        #         user=request.user,
        #         item=item,
        #         ordered=False
        #     )
        #     order_item.save()
        return Response(status=HTTP_200_OK)

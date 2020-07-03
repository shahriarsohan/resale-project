from django.urls import path
from .views import (
    AddToCartAPIView
)

urlpatterns = [
    path('add-to-cart', AddToCartAPIView.as_view())
]

from django.urls import path
from .views import (
    MembersListAPIView,
    UsersListAPIView,
    ProductsListAPIView,
    FeaturedProductsListView
)

urlpatterns = [
    path('users/list', MembersListAPIView.as_view()),
    path('admin/users/list', UsersListAPIView.as_view()),
    path('products/list', ProductsListAPIView.as_view()),
    path('featured/products/list', FeaturedProductsListView.as_view())
]

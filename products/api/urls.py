from django.urls import path
from .views import (
    MembersListAPIView,
    UsersListAPIView,
    ProductsListAPIView,
    FeaturedProductsListView,
    FeaturedProductsDetails,
    FeaturedProductsFilter
)

urlpatterns = [
    path('users/list', MembersListAPIView.as_view()),
    path('admin/users/list', UsersListAPIView.as_view()),
    path('products/list', ProductsListAPIView.as_view()),
    path('featured/products/list', FeaturedProductsListView.as_view()),
    path('featured/products/details/<slug>',
         FeaturedProductsDetails.as_view()),
    path('featured/products/filter', FeaturedProductsFilter.as_view())
]

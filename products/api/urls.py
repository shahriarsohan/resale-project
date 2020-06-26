from django.urls import path
from .views import (
    MembersListAPIView,
    UsersListAPIView,
    ProductsListAPIView
)

urlpatterns = [
    path('users/list', MembersListAPIView.as_view()),
    path('admin/users/list', UsersListAPIView.as_view()),
    path('products/list', ProductsListAPIView.as_view())
]

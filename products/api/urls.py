from django.urls import path
from .views import (
    MembersListAPIView,
    UsersListAPIView,
    CategoryListAPIView
)

urlpatterns = [
    path('users/list', MembersListAPIView.as_view()),
    path('admin/users/list', UsersListAPIView.as_view()),
    path('category/list', CategoryListAPIView.as_view())
]

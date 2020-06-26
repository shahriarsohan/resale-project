from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import ugettext_lazy as _

from .models import Products, Member


class ProductsAdmin(admin.ModelAdmin):

    list_display = ('title', 'division', 'is_sold',
                    'product_price', 'featured')
    list_filter = ('division', 'zilla')
    search_fields = ('title', 'phone_number', 'division',
                     'zilla', 'category', 'user')
    ordering = ('timestamp',)
    # filter_horizontal = ('category', 'user',)


class MemberAdmin(admin.ModelAdmin):
    list_display = ('user', 'member')
    list_filter = ('user', 'member')


admin.site.register(Products, ProductsAdmin)
admin.site.register(Member, MemberAdmin)

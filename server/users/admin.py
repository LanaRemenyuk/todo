from django.contrib import admin

from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['_id', 'username', 'login', 'password', 'is_staff', 'is_active', 'updated_at']
    list_filter = ['is_staff', 'is_active']
    search_fields = ['username', 'login']

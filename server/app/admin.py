from django.contrib import admin

from .models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['_id', 'userName', 'userEmail', 'text', 'isDone', 'isAdminUpdated', 'created_at', 'updated_at']
    list_filter = ['isDone', 'isAdminUpdated']
    search_fields = ['userName']

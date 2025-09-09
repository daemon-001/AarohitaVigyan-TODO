from django.contrib import admin
from .models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_done', 'created_at']
    list_filter = ['is_done', 'created_at']
    search_fields = ['title']
    readonly_fields = ['created_at', 'updated_at']





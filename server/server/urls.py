from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/signInWithPassword',include('users.urls')),
    path('tasks', include('app.urls')),
]

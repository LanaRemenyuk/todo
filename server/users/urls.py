from django.urls import path
from .views import SignInWithPassword

urlpatterns = [
    path('', SignInWithPassword.as_view())
]
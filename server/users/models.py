import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    _id = models.UUIDField(primary_key=True,
                           default=uuid.uuid4,
                           editable=False)
    login = models.CharField(
        blank=False,
        null=False,
        unique=True
    )
    password = models.CharField(

    )
    updated_at = models.DateField(
        auto_now=True
    )

    class Meta:
        db_table = 'users'


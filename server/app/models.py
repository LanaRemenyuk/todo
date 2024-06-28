import uuid

from django.db import models


class Task(models.Model):
    _id = models.UUIDField(primary_key=True,
                           default=uuid.uuid4,
                           editable=False)
    userName = models.CharField(blank=True,
                                null=True)
    userEmail = models.CharField(blank=True,
                                 null=True
                                 )
    text = models.CharField(blank=True,
                            null=True
                            )
    isDone = models.BooleanField(
        blank=True,
        null=True
    )
    isAdminUpdated = models.BooleanField(
        blank=True,
        null=True
    )
    created_at = models.DateField(
        auto_now_add=True
    )
    updated_at = models.DateField(
        auto_now=True
    )

    class Meta:
        db_table = 'tasks'

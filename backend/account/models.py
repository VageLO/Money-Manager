from django.db import models


class Account(models.Model):
    title = models.CharField(max_length=255)
    currency = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


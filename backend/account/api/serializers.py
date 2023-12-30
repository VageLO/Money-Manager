from rest_framework import serializers
from django.utils.translation import gettext_lazy as _

from account.models import Account

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = [
            'title',
            'currency',
            'created_at',
            'updated_at',
        ]
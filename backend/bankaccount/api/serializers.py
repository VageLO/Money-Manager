from rest_framework import serializers
from django.utils.translation import gettext_lazy as _

from bankaccount.models import BankAccount

class BankAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = BankAccount
        fields = [
            'id',
            'title',
            'currency',
            'created_at',
            'updated_at',
        ]
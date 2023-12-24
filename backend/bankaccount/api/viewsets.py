from rest_framework.viewsets import ModelViewSet

from bankaccount.models import BankAccount 
from bankaccount.api.serializers import BankAccountSerializer

class BankAccountViewset(ModelViewSet):
    queryset = BankAccount.objects.all()
    serializer_class = BankAccountSerializer

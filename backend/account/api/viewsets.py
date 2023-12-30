from rest_framework import viewsets  
from rest_framework.response import Response

from account.models import Account 
from account.api.serializers import AccountSerializer

class AccountViewset(viewsets.ViewSet):
    def list(self, request):
        queryset = Account.objects.all()
        serializer = AccountSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        
        pass

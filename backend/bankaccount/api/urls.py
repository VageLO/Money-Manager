from django.urls import path, include
from rest_framework.routers import SimpleRouter

from bankaccount.api import viewsets, views

router = SimpleRouter()
router.register(r'bankaccount', viewsets.BankAccountViewset, basename='bankaccount')


urlpatterns = [
    path('ping/', views.PingView.as_view(), name='ping'),
] + router.get_urls()
from rest_framework.routers import SimpleRouter

from account.api import viewsets

router = SimpleRouter()
router.register(r'account', viewsets.AccountViewset, basename='account')

urlpatterns = router.get_urls()
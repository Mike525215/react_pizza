from django.urls import path
from .views import *
urlpatterns = [
    path('', PizzaAPIView.as_view())
]
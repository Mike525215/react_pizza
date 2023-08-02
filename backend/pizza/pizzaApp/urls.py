from django.urls import path
from .views import *
urlpatterns = [
    path('pizza/', PizzaAPIView.as_view()),
    path('pizza/<int:pk>/', PizzaDetailAPIView.as_view()),
    path('category/', CategoryAPIView.as_view())
]
from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *
class PizzaAPIView(ListAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer

class CategoryAPIView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
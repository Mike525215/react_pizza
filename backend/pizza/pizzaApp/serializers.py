from rest_framework.serializers import ModelSerializer
from .models import *

class PizzaSerializer(ModelSerializer):
    class Meta:
        model = Pizza
        fields = "__all__"

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

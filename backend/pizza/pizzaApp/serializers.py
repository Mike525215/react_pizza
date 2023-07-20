from rest_framework.serializers import ModelSerializer
from .models import *

class PizzaSerializer(ModelSerializer):
    class Meta:
        model = Pizza
        fields = "__all__"

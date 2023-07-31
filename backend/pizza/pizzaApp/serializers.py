from rest_framework import serializers
from .models import *

class PizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizza
        fields = "__all__"
    def get_image_url(self, obj):
        request = self.context.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

from rest_framework import serializers
from .models import *

class UserSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']




    # id = serializers.IntegerField(read_only=True)
    # username = serializers.CharField(required=True, allow_blank=False, max_length=100)
    # password = serializers.CharField(required=True, allow_blank=False, max_length=100)
    # email = serializers.EmailField(required=True, allow_blank=False, max_length=100)

    # def create(self, validated_data):
    #     """
    #     Create and return a new `User` instance, given the validated data.
    #     """
    #     return User.objects.create(**validated_data)

    # def update(self, instance, validated_data):
    #     """
    #     Update and return an existing `User` instance, given the validated data.
    #     """
    #     instance.username = validated_data.get('username', instance.title)
    #     instance.password = validated_data.get('password', instance.password)
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.save()
    #     return instance
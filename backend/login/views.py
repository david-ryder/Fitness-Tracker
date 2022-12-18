from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializers import *

class ReactAPI(APIView):

    serializer_class = UserSerializer

    def get(self, request):
        detail = [ {"name": detail.name,"detail": detail.detail}
        for detail in User.objects.all()]
        return Response(detail)

    def post(self, request):
        
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
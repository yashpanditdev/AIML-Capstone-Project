from django.shortcuts import render
from rest_framework.response import Response

# Create your views here.
from rest_framework import generics
from .models import Document
from .serializers import DocumentSerializer

class DocumentListCreate(generics.ListCreateAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

    def post(self, request, *args, **kwargs):
        # For now, return the input text as the summary
        text = request.data.get('text', '')
        return Response({'summary': text})
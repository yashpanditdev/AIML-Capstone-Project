from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .model import summarizer
import json

# Create your views here.
from rest_framework import generics
from .models import Document, TeamMember
from .serializers import DocumentSerializer, TeamMemberSerializer

class DocumentListCreate(generics.ListCreateAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

class TeamMemberList(generics.ListAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer

@csrf_exempt
def generate_summary(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        text = data.get('text', '')
        summary = summarizer.generate_summary(text)
        return JsonResponse({'summary': summary})
    return JsonResponse({'error': 'Invalid request method'}, status=400)

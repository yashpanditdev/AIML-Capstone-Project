from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .model import summarizer
import json
import fitz  # PyMuPDF
from django.core.files.storage import default_storage
from django.conf import settings
import os

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
        if not text:
            return JsonResponse({'error': 'No text provided'}, status=400)
        summary = summarizer.generate_summary(text)
        return JsonResponse({'summary': summary})
    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def summarize_pdf(request):
    if request.method == 'POST':
        if 'pdf' not in request.FILES:
            return JsonResponse({'error': 'No PDF file uploaded'}, status=400)
        
        pdf_file = request.FILES['pdf']
        file_path = default_storage.save(os.path.join(settings.MEDIA_ROOT, pdf_file.name), pdf_file)
        
        try:
            # Extract text from PDF
            pdf_document = fitz.open(file_path)
            text = ''
            for page_num in range(len(pdf_document)):
                page = pdf_document.load_page(page_num)
                text += page.get_text()

            pdf_document.close()  # Ensure the PDF file is closed before deletion

            # Generate summary using your summarizer
            summary = summarizer.generate_summary(text)
        finally:
            # Delete the file after processing
            default_storage.delete(file_path)
        
        return JsonResponse({'summary': summary})
    return JsonResponse({'error': 'Invalid request method'}, status=400)

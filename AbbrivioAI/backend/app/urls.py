from django.urls import path
from .views import DocumentListCreate, TeamMemberList, generate_summary, summarize_pdf

urlpatterns = [
    path('documents/', DocumentListCreate.as_view(), name='document-list-create'),
    path('team-members/', TeamMemberList.as_view(), name='team-member-list'),
    path('generate-summary/', generate_summary, name='generate_summary'),
    path('summarize-pdf/', summarize_pdf, name='summarize_pdf'),
]

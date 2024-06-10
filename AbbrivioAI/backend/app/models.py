from django.db import models

# Create your models here.
class Document(models.Model):
    text = models.TextField()


class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    photo_url = models.URLField(max_length=200)
    linkedin_url = models.URLField(max_length=200)

    def __str__(self):
        return self.name
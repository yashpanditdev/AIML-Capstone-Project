from django.core.management.base import BaseCommand
from app.models import TeamMember

class Command(BaseCommand):
    help = 'Populate the database with initial team members'

    def handle(self, *args, **kwargs):
        team_members = [
            {
                'name': 'Viki Patel',
                'photo_url': 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
                'linkedin_url': 'https://www.linkedin.com/in/viki-patel-08242b109/'
            },
            {
                'name': 'Bhavya Vadher',
                'photo_url': 'https://example.com/photos/bob.jpg',
                'linkedin_url': 'https://linkedin.com/in/bobsmith'
            },
            {
                'name': 'Yash Pandit',
                'photo_url': 'https://example.com/photos/carol.jpg',
                'linkedin_url': 'https://linkedin.com/in/carolwhite'
            },
            {
                'name': 'Devarsh Jadhav',
                'photo_url': 'https://example.com/photos/david.jpg',
                'linkedin_url': 'https://linkedin.com/in/davidbrown'
            },
            {
                'name': 'Roman Syyed',
                'photo_url': 'https://example.com/photos/eva.jpg',
                'linkedin_url': 'https://linkedin.com/in/evagreen'
            }
        ]

        for member in team_members:
            TeamMember.objects.create(**member)
            self.stdout.write(self.style.SUCCESS(f"Added {member['name']}"))
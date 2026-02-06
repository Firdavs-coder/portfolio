from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='media/', blank=True, null=True)
    description = models.TextField()
    project_type = models.CharField(max_length=100)
    project_type_color = models.CharField(max_length=10, choices=[
        ('success', 'Green'),
        ('primary', 'Orange'),
        ('info', 'Blue'),
    ], default='info')
    url = models.URLField()

    def __str__(self):
        return self.name

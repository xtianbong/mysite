from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=64)
    link = models.CharField(max_length=64, default="#")
    image = models.CharField(max_length=256, default="#")
    desc = models.CharField(max_length=2048, default="#") #description
    featured=models.BooleanField(default=False)
    active=models.BooleanField(default=False)
    complete=models.BooleanField(default=False)

    def __str__(self):
        return f"{self.id}: {self.name}"
        

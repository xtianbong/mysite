from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=64)
    link = models.CharField(max_length=64)
    youtube = models.BooleanField(default=False)
    image = models.CharField(max_length=256, default="#")
    desc = models.CharField(max_length=2048, default="#") #description
    featured=models.BooleanField(default=False)
    active=models.BooleanField(default=False)
    complete=models.BooleanField(default=False)

    #def save(self, *args, **kwargs): #set the value of the embed field (link + the word embed in the middle)
    #    self.embed = self.link.partition(".com")[0] + self.link.partition(".com")[1] +"/embed"+self.link.partition(".com")[2]
    #    super(Project, self).save(*args, **kwargs) # Call the "real" save() method.

    def __str__(self):
        return f"{self.id}: {self.name}"
        

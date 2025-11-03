from django.db import models

# Create your models here.
class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField()

    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=50)
    percentage = models.CharField(max_length=10)

    def __str__(self):
        return self.name
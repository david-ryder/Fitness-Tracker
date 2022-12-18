from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(null=False, blank=False, unique=True, max_length=100)
    password = models.CharField(null=False, blank=False, max_length=100)
    email = models.EmailField(null=False, blank=False, max_length=100)

    class Meta:
        ordering = ['username']
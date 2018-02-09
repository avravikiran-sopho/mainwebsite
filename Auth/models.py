from __future__ import unicode_literals
from django_countries.fields import CountryField
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.validators import RegexValidator
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
GENDER_CHOICES = (
   ('male', 'male'),
   ('female', 'female')
)

class Profile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.TextField(max_length=100,blank=True)
    college = models.TextField(max_length=100, blank=True)
    mobile =  models.TextField(max_length=15)
    adress = models.TextField(max_length=500, blank=True)
    city = models.TextField(max_length=100, blank=True)
    country = CountryField(blank_label='Country')
    zipcode = models.IntegerField()
    gender = models.CharField(choices=GENDER_CHOICES, max_length=128)
    elanids =models.IntegerField()
    checkin = models.BooleanField(default=False)
    def __str__(self):
       return str(self.user)
# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()






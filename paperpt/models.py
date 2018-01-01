# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


# Create your models here.
from django.db import models
def get_user_image_folder(instance, filename):
    return "%s/%s" %(instance.user.username, filename)

class paperpt(models.Model):
	user = models.OneToOneField(User)
	file = models.FileField(upload_to='paperpt/')
	uploaded_at = models.DateTimeField(auto_now_add=True)
	def __str__(self):
		return str(self.user)


# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
from django.db import models
def get_user_image_folder(instance, filename):
    return "%s/%s" %(instance.user.username, filename)

class Document(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE, default=1)
	document = models.FileField(upload_to="documents")
	uploaded_at = models.DateTimeField(auto_now_add=True)
	def __str__(self):
		return str(self.user)


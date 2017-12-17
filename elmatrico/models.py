# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


# Create your models here.
from django.db import models
def get_user_image_folder(instance, filename):
    return "%s/%s" %(instance.user.username, filename)

class Document(models.Model):
	def validate_image(fieldfile_obj):
		filesize = fieldfile_obj.file.size
		megabyte_limit = 5.0
		if filesize > megabyte_limit*1024*1024:
			raise ValidationError("Max file size is %sMB" % str(megabyte_limit))

	user = models.OneToOneField(User)
	document = models.FileField(upload_to='documents/',validators=[validate_image])
	uploaded_at = models.DateTimeField(auto_now_add=True)
	def __str__(self):
		return str(self.user)


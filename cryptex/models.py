# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


# Create your models here.
from django.db import models

class player(models.Model):
	user = models.OneToOneField(User)
	level = models.IntegerField(default=1)
	time = models.DateTimeField(auto_now_add=True)
	pname = models.CharField(max_length=100)
	def __str__(self):
		return str(self.user)

class answer(models.Model):
	problem = models.IntegerField()
	ans = models.CharField(max_length=100)
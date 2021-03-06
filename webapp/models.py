# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.conf import settings
from django.db import models
from datetime import datetime


# Create your models here.

class Detail(models.Model):
	name = models.CharField(max_length=100)
	details = models.CharField(max_length=1000)
	rules = models.CharField(max_length=1000)
	fee = models.IntegerField(default=0)

	def __str__(self):
		return str(self.name)

class EventName(models.Model):
	shortname = models.CharField(max_length=50)
	name = models.CharField(max_length=100)
	def __str__(self):
		return str(self.name)

class EventRegister(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE, default=1)
	event = models.CharField(max_length=100)
	time = models.DateTimeField(auto_now_add=True)
	def __str__(self):
		return str(self.event)

class Team(models.Model):
    teamids = models.IntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE, default=1)
    event = models.CharField(max_length=100)

class TeamLeader(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE, default=1)
	teamids = models.IntegerField()
	event = models.CharField(max_length=100)
	def __str__(self):
		return str(self.user)

class Social(models.Model):
	name = models.CharField(max_length=100)
	email = models.CharField(max_length=100)
	message = models.TextField()

class SpokenWord(models.Model):
	name = models.CharField(max_length=100)
	email = models.CharField(max_length=100)
	mobile =  models.TextField(max_length=15)

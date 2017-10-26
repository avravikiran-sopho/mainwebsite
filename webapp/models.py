# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Detail(models.Model):
	name = models.CharField(max_length=100)
	details = models.CharField(max_length=1000)
	rules = models.CharField(max_length=1000)
	fee = models.IntegerField(default=0)

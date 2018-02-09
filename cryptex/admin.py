# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import player
from .models import answer
from django.contrib import admin

# Register your models here.

class DisplayPlayer(admin.ModelAdmin):
	list_display = ('user','level','pname',)
	ordering = ('level',)
	search_fields = ['user__username','pname',]

class DisplayAnswer(admin.ModelAdmin):
	list_display = ('problem',)

admin.site.register(player,DisplayPlayer)
admin.site.register(answer,DisplayAnswer)
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import paperpt
from django.contrib import admin

# Register your models here.

class  DisplayPaperpt(admin.ModelAdmin):
    list_display = ('user','get_name','get_elanid','file',)
    search_fields = ['user','user__username','user__profile__full_name','user__profile__elanids']

    def get_name(self, obj):
		return obj.user.profile.full_name
    get_name.short_description = 'Name'

    def get_elanid(self, obj):
		return obj.user.profile.elanids
    get_elanid.short_description = 'Elanid'

admin.site.register(paperpt,DisplayPaperpt)

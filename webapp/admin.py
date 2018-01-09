# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Detail, EventName, EventRegister, TeamLeader, Team
# Register your models here.


class DisplayEventRegister(admin.ModelAdmin):
	list_display = ('user','event')
	search_fields = ['event']
	ordering = ('event',)
	list_filter = ('event',)

admin.site.register(Detail)
admin.site.register(EventName)
admin.site.register(EventRegister, DisplayEventRegister)
admin.site.register(TeamLeader)
admin.site.register(Team)
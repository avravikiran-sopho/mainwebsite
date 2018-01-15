# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from Auth.models import Profile
from .models import Detail, EventName, EventRegister, TeamLeader, Team
# Register your models here.


class DisplayEventRegister(admin.ModelAdmin):
	list_display = ('user','get_name','event','get_college','get_mobile','get_elanid')
	search_fields = ['event','user__username','user__profile__full_name','user__profile__college','user__profile__mobile','user__profile__elanids']
	ordering = ('event',)
	list_filter = ('event',)

	def get_name(self, obj):
		return obj.user.profile.full_name
	get_name.short_description = 'Name'
	def get_college(self, obj):
		return obj.user.profile.college
	get_college.short_description = 'College'

	def get_mobile(self, obj):
		return obj.user.profile.mobile
	get_mobile.short_description = 'Mobile'

	def get_elanid(self, obj):
		return obj.user.profile.elanids
	get_elanid.short_description = 'Elanid'

class  DisplayTeamLeader(admin.ModelAdmin):
	list_display = ('user','teamids','event')

class  DisplayTeam(admin.ModelAdmin):
	list_display = ('user','teamids','event')

class  DisplaySocial(admin.ModelAdmin):
	list_display = ('name','email','message')
	
admin.site.register(Detail)
admin.site.register(Social,DisplaySocial)
admin.site.register(EventName)
admin.site.register(EventRegister, DisplayEventRegister)
admin.site.register(TeamLeader, DisplayTeamLeader)
admin.site.register(Team, DisplayTeam)

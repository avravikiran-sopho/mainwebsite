from django.contrib import admin
from .models import Profile


# Register your models here.

class DisplayProfile(admin.ModelAdmin):
	list_display = ('user','full_name','college','mobile','country','elanids','get_joined','get_active')
	def get_joined(self, obj):
		return obj.user.date_joined
	get_joined.short_description = 'Joined'
	def get_active(self, obj):
		return obj.user.is_active
	get_active.short_description = 'Active'
	search_fields = ['elanids','mobile','full_name','country','user__is_active','user__username']
	ordering = ('user','elanids',)
admin.site.register(Profile, DisplayProfile)
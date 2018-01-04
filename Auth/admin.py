from django.contrib import admin
from .models import Profile


# Register your models here.

class DisplayProfile(admin.ModelAdmin):
	list_display = ('user','full_name','college','mobile','country','elanids')
	search_fields = ['elanids','mobile','full_name','country']
	ordering = ('user','elanids')
admin.site.register(Profile, DisplayProfile)
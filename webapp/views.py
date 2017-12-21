# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Detail, EventName , EventRegister
import json
from django.contrib.auth.decorators import login_required 
from Auth.models import Profile
from django.core.mail import EmailMessage
from django.conf import settings

from django.http import HttpResponseRedirect

# Create your views here.
def index(request):
	return render(request,'webapp/index.html')

def team(request):
	return render(request,'webapp/team.html')

def events(request):
	return render(request,'webapp/events.html')

def pronites(request):
	return render(request,'webapp/pronites.html')
def sponsors(request):
	return render(request,'webapp/sponsors.html')

@login_required
def dashboard(request):	
	profile = Profile.objects.get(user = request.user)
	events = EventRegister.objects.filter(user = request.user)
	return render(request,'webapp/dashboard.html',{'profile':profile,'events':events})


def details(request,name):
    return render(request,'webapp/dashboard.html')

def eventregister(request,eventname):
	if request.user.is_authenticated():
		if EventName.objects.filter(shortname=eventname).exists():
			event = EventName.objects.get(shortname=eventname)
			new_object = EventRegister()
			new_object.user = request.user
			new_object.event = event.name
			new_object.save()
		else:
			print "not found"
			return HttpResponseRedirect("/newsite/events")	
		return HttpResponseRedirect("/newsite/dashboard")
	else:
		return HttpResponseRedirect("/login")

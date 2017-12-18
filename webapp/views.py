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


def details(request):
    # name = request.POST["name"]
    # data = {
    #     'information': Detail.objects.get(name=name)
    # }
    jdata = json.dumps("data")
    return HttpResponse(jdata, content_type="application/json")

def eventregister(request,eventname):
	if request.user.is_authenticated():
		new_object = EventRegister()
		new_object.user = request.user
		new_object.event = EventName.objects.get(name=eventname)
		new_object.save()
		return render(request,'webapp/index.html')
	else:
		return render(request, 'webapp/events.html')


# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from Auth.models import Profile
from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Detail, EventName , EventRegister
import json
from django.contrib.auth.decorators import login_required 
from Auth.models import Profile
from django.core.mail import EmailMessage
from django.conf import settings
from django.utils.timezone import localtime, now
from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext
from .forms import teamForm

def handler404(request):
    response = render_to_response('404.html', {},
                              context_instance=RequestContext(request))
    response.status_code = 404
    return response
# Create your views here.
def index(request):
	if request.user.is_authenticated():
		profile = Profile.objects.get(user = request.user)
		return render(request,'webapp/index.html',{'profile':profile})
	else:
		return render(request,'webapp/index.html')

def mobile(request):
	if request.user.is_authenticated():
		profile = Profile.objects.get(user = request.user)
		return render(request,'webapp/mobile.html',{'profile':profile})
	else:
		return render(request,'webapp/mobile.html')

def team(request):
	if request.user.is_authenticated():
		profile = Profile.objects.get(user = request.user)
		return render(request,'webapp/team.html',{'profile':profile})
	else:
		return render(request,'webapp/team.html')

def cisco(request):
	if request.user.is_authenticated():
		profile = Profile.objects.get(user = request.user)
		return render(request,'webapp/cisco.html',{'profile':profile})
	else:
		return render(request,'webapp/cisco.html')
def facebookbot(request):
	if request.user.is_authenticated():
		profile = Profile.objects.get(user = request.user)
		return render(request,'webapp/fbbot.html',{'profile':profile})
	else:
		return render(request,'webapp/fbbot.html')
def hackathon(request):
	return render(request,'webapp/hackathon.html')
def events(request):
	if request.user.is_authenticated():
		profile = Profile.objects.get(user = request.user)
		return render(request,'webapp/events.html',{'profile':profile})
	else:
		return render(request,'webapp/events.html')

def pronites(request):
	if request.user.is_authenticated():
		profile = Profile.objects.get(user = request.user)
		return render(request,'webapp/pro.html',{'profile':profile})
	else:
		return render(request,'webapp/pro.html')

def sponsors(request):
	if request.user.is_authenticated():
		profile = Profile.objects.get(user = request.user)
		return render(request,'webapp/sponsors.html',{'profile':profile})
	else:
		return render(request,'webapp/sponsors.html')

def workshops(request):
	if request.user.is_authenticated():
		profile = Profile.objects.get(user = request.user)
		return render(request,'webapp/workshops.html',{'profile':profile})
	else:
		return render(request,'webapp/workshops.html')

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
			if EventRegister.objects.filter(user = request.user,event = event).exists():
				return HttpResponseRedirect("/dashboard")
			else:
				new_object = EventRegister()
				new_object.user = request.user
				new_object.event = event.name
				new_object.uploaded_at = localtime(now())
				new_object.save()
		else:
			return HttpResponseRedirect("/events")	
		return HttpResponseRedirect("/dashboard")
	else:
		return HttpResponseRedirect("/login")


def team_register(request):
	if request.user.is_authenticated():
		profile = Profile.objects.get(user = request.user)
		if request.method == "POST":
			form = teamForm(request.POST)
			if form.is_valid():
				print form.errors
				data = form.cleaned_data
				elanid_list = []
				email_list= []
				for x in range(1, 6):
					if data['elanid' + str(x)] != "":
						elanid = int(data['elanid' + str(x)][-5:])
						email = data['email' + str(x)]
						if Profile.objects.filter(elanids = elanid).exists():
							profile = Profile.objects.get(elanids = elanid)
							if profile.user.username == email:
								elanid_list.append(data['elanid' + str(x)])
								email_list.append(data['email' + str(x)])

							else:
								form=teamForm()								
								message = "Incorrect combination of ELAN ID & e-mail id."
								return render(request,'webapp/teamregister.html',{'form':form,'message':message})							
						else:
							form=teamForm()
							message = "Incorrect combination of ELAN ID & e-mail id."
							return render(request,'webapp/teamregister.html',{'form':form,'message':message})
				
			print elanid_list
			print email_list
			return render(request,'webapp/teamregister.html',{'form':form,})
		else:
			form = teamForm()
			return render(request,'webapp/teamregister.html',{'form':form,})
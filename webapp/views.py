# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from Auth.models import Profile
from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Detail, EventName , EventRegister, Team, TeamLeader, Social
import json
from django.contrib.auth.decorators import login_required
from Auth.models import Profile
from django.core.mail import EmailMessage
from django.conf import settings
from django.utils.timezone import localtime, now
from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext
from .forms import teamForm, socialForm , deregisterForm

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

def litfest(request):
	return render(request,'webapp/litfest.html')

def litw(request):
	return render(request,'webapp/litr_workshop.html')

def social(request):
	if request.method == "POST":
		form = socialForm(request.POST)
		if form.is_valid():
			data = form.cleaned_data
			new_object = Social()
			new_object.name = data['name']
			new_object.email = data['email']
			new_object.message = data['message']
			new_object.save()
			message = "Your response is recorded."
			form = socialForm()
			return render(request,'webapp/mypledge.html',{'form':form,'message':message})
		else:
			message = "Invalid input."
			return render(request,'webapp/mypledge.html',{'form':form,'message':message})
	else:
		form = socialForm()
		return render(request,'webapp/mypledge.html',{'form':form})


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
	try:
		teams = Team.objects.filter(user = request.user)
		team_array=[]
		for team in teams:
			team_members = Team.objects.filter(teamids = team.teamids)
			for member in team_members:
				team_array.append(member)
	except Exception as e:
            print(e)
	return render(request,'webapp/dashboard.html',{'profile':profile,'events':events,'team_array':team_array})


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
				event = data['event']
				elanid_list = []
				email_list= []
				for x in range(1, 6):
					if data['elanid' + str(x)] != "":
						elanid_raw = data['elanid' + str(x)]
						print elanid_raw[:8]
						if elanid_raw[:8] == "EN18IITH":
							try:
								elanid = int(data['elanid' + str(x)][-5:])
								email = data['email' + str(x)]
								if Profile.objects.filter(elanids = elanid).exists():
									profile = Profile.objects.get(elanids = elanid)
									if profile.user.username == email:
										elanid_list.append(int(data['elanid' + str(x)][-5:]))
										email_list.append(data['email' + str(x)])

									else:

										message = "Incorrect combination of ELAN ID & e-mail id."
										print 1
										return render(request,'webapp/teamregister.html',{'form':form,'message':message})
								else:

									message = "Incorrect combination of ELAN ID , e-mail id."
									print 2
									return render(request,'webapp/teamregister.html',{'form':form,'message':message})
							except:
								message = "Incorrect ELAN ID"
								print 8
								return render(request,'webapp/teamregister.html',{'form':form,'message':message})

						else:
							message = "Incorrect ELAN ID"
							print 7
							return render(request,'webapp/teamregister.html',{'form':form,'message':message})

				leader_email = email_list[0]
				leader = User.objects.get(username = leader_email)
				if TeamLeader.objects.filter(user = leader, event = event).exists():
					message = "Team leader already exists for this event."
					print 3
					return render(request,'webapp/teamregister.html',{'form':form,'message':message})
				else:
					leader_object = TeamLeader()
					leader_object.user = leader
					leader_object.event = event
					leader_object.teamids = 1
					leader_object.save()
					teamleader = TeamLeader.objects.get(user = leader,event = event)
					teamid = teamleader.id
					teamleader.teamids = teamleader.id
					teamleader.save()
					if EventRegister.objects.filter(user = leader,event = event).exists():
						pass
					else:
						new_object = EventRegister()
						new_object.user = leader
						new_object.event = event
						new_object.uploaded_at = localtime(now())
						new_object.save()
					for email in email_list:
						member = User.objects.get(username = email)
						if Team.objects.filter(user = member, event = event):
							TeamLeader.objects.get(user = leader,event = event).delete()
							print 4
							message = "Some of the team members already formed a team for this event"
							return render(request,'webapp/teamregister.html',{'form':form,'message':message})
						else:
							new_object=Team()
							new_object.user = member
							new_object.teamids = teamid
							new_object.event = event
							new_object.save()
							if EventRegister.objects.filter(user = member,event = event).exists():
								pass
							else:
								new_object = EventRegister()
								new_object.user = member
								new_object.event = event
								new_object.uploaded_at = localtime(now())
								new_object.save()
			return HttpResponseRedirect("/dashboard")
		else:
			form = teamForm()
			return render(request,'webapp/teamregister.html',{'form':form,})



def deregister(request):
    if request.user.is_authenticated():
        profile = Profile.objects.get(user = request.user)
        if request.method == "POST":
            event = request.POST.get('reg_events')
            print event
            EventRegister.objects.filter(user = request.user, event = event).delete()
            return HttpResponseRedirect("/dashboard")
        else:
            form = deregisterForm(user = request.user)
            return render(request,'webapp/deregister.html',{'form':form,'profile':profile})

    else:
        return HttpResponseRedirect("/login")

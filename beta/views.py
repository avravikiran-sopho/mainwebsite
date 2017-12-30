# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

def index(request):
	return render(request,'beta/index.html')

def about(request):
	return render(request,'beta/about.html')

def events(request):
	return render(request,'beta/events.html')
def sponsors(request):
	return render(request,'beta/sponsors.html')
def workshops(request):
	return render(request,'beta/workshops.html')
def team(request):
	return render(request,'beta/team.html')
def ca(request):
	return render(request,'beta/ca.html')
def facebookbot(request):
	return render(request,'beta/fbbot.html')
def networking(request):
	return render(request,'beta/cisco.html')
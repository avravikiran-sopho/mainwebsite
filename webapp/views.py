# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render
from .models import Detail
# Create your views here.
def index(request):
	return render(request,'webapp/index.html')

def team(request):
	return render(request,'webapp/team.html')

def events(request):
	return render(request,'webapp/events.html')

def details(request):
    username = request.GET.get('name', None)
    data = {
        'information': Detail.objects.get(name=name)
    }
    return JsonResponse(data)
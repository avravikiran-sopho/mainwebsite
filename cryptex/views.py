

# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .forms import playerForm
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required 
from .models import player
from .models import answer
from django.utils.timezone import localtime, now
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from Auth.models import Profile
from webapp.models import EventRegister
# Create your views here.
# def index(request):
# 	return render(request,'elmatrico/index.html')



def index(request):
    if request.method == 'POST':
        form = playerForm(request.POST, request.FILES)
        if form.is_valid():
            form.user = request.user
            player = form.save(commit=False)
            panme = form.cleaned_data['pname']
            new_object = player()
            new_object.user = request.user
            new_object.level = 1
            new_object.time = localtime(now())
            new_object.pname = panme
            new_object.save()
            profile = Profile.objects.get(user = request.user)
            return render(request, 'cryptex/index.html', {
                'profile':profile,
            })
        
    else:
    	try:
            user = request.user
            profile = Profile.objects.get(user = user)
            registered =  EventRegister.objects.get(user = request.user,event ='CRYPTEX')
            try:
                return render(request, 'cryptex/index.html', {
                    'profile':profile,
                    'registered':registered,
        		})
            except:
                form = playerForm()
                return render(request, 'cryptex/index.html', {
                    'profile':profile,
                    'form':form,
                    'registered':registered,
                })
        except:
            form = playerForm()
            return render(request, 'cryptex/index.html', {
                'form':form,
	    	})

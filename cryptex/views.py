

# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .forms import playerForm
from .forms import answerForm
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required 
from .models import player
from .models import answer
from django.utils.timezone import localtime, now
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from Auth.models import Profile
from webapp.models import EventRegister
from django.http import HttpResponseRedirect
# Create your views here.
# def index(request):
# 	return render(request,'elmatrico/index.html')



def index(request):
    if request.method == 'POST':
        form = playerForm(request.POST, request.FILES)
        if form.is_valid():
            form.user = request.user
            # player = form.save(commit=False)
            panme = form.cleaned_data['pname']
            new_object = player()
            new_object.user = request.user
            new_object.level = 1
            new_object.time = localtime(now())
            new_object.pname = panme
            new_object.save()
            profile = Profile.objects.get(user = request.user)
            player_user = player.objects.get(user = request.user)
            registered =  EventRegister.objects.get(user = request.user,event ='CRYPTEX')
            question = str(player_user.level)
            form = answerForm()
            return render(request, 'cryptex/play.html', {
                'profile':profile,
                'player':player_user,
                'registered':registered,
                'question':question,
                'form':form,
            })
        
    else:
        try:
            user = request.user
            profile = Profile.objects.get(user = user)
            registered =  EventRegister.objects.get(user = request.user,event ='CRYPTEX')
            form = answerForm()
            if player.objects.filter(user = request.user).exists():
                player_user = player.objects.get(user = request.user)
                question = str(player_user.level)
                return render(request, 'cryptex/play.html', {
                    'form':form,
                    'profile':profile,
                    'registered':registered,
                    'player':player_user,
                    'question':question,
        		})
            else:
                form = playerForm()
                return render(request, 'cryptex/index.html', {
                    'profile':profile,
                    'form':form,
                    'registered':registered,
                })
        except:
            print 'except'
            return render(request, 'cryptex/index.html', {
                })

def validate(request):
    if request.method == 'POST':
        form = answerForm(request.POST)
        if form.is_valid():
            user = request.user
            user_answer = form.cleaned_data['answer']
            player_user = player.objects.get(user = request.user)
            profile = Profile.objects.get(user = request.user)
            player_level = player_user.level
            correct_answer = answer.objects.get(problem = player_level)
            print correct_answer.ans
            print user_answer
            if user_answer == correct_answer.ans:
                player_level +=1
                player_user.level=player_level
                player_user.time=localtime(now())
                player_user.save()
                player_user = player.objects.get(user = request.user)
                form = answerForm()
                return HttpResponseRedirect("/cryptex")
            else:
                return HttpResponseRedirect("/cryptex")

def leaderboard(request):
    profile = Profile.objects.get(user = request.user)
    ordered_players = player.objects.order_by('-level', 'time')
    return render(request, 'cryptex/leaderboard.html', {
                'ordered_players':ordered_players,
                'profile':profile,
            })






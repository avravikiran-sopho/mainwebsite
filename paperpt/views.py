# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .forms import paperptForm
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required 
from .models import paperpt
from django.utils.timezone import localtime, now
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from Auth.models import Profile
# Create your views here.
# def index(request):
# 	return render(request,'elmatrico/index.html')



def index(request):
    if request.method == 'POST':
        form = paperptForm(request.POST, request.FILES)
        if form.is_valid():
            form.user = request.user
            file = form.save(commit=False)
            new_object = paperpt()
            new_object.user = request.user
            file = request.FILES['file']
            new_object.file = request.FILES['file']
            new_object.uploaded_at = localtime(now())
            new_object.save()
            user = request.user
            files = paperpt.objects.get(user=user)
            profile = Profile.objects.get(user = request.user)
            return render(request, 'paperpt/index.html', {
                'files': files,
                'profile':profile,
            })
        
    else:
    	try:
            user = request.user
            profile = Profile.objects.get(user = user)
            try:
                files = paperpt.objects.get(user=user) 
                return render(request, 'paperpt/index.html', {
        			'files': files,
                    'profile':profile,
        		})
            except:
                form = paperptForm()
                return render(request, 'paperpt/index.html', {
                    'profile':profile,
                    'form': form,
                })
        except:
            form = paperptForm()
            return render(request, 'paperpt/index.html', {
                'form': form,
	    	})

def file_size(value): # add this to some file where you can import it from
    limit = 2 * 1024 * 1024
    if value.size > limit:
        raise ValidationError('File too large. Size should not exceed 2 MiB.')
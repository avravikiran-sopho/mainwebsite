# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .forms import DocumentForm
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required 
# Create your views here.
# def index(request):
# 	return render(request,'elmatrico/index.html')



def home(request):
	return render(request,'elmatrico/index.html')

@login_required
def index(request):		
	if request.method == 'POST':
		form = DocumentForm(request.POST, request.FILES)
	if request.method == 'POST':
		form = DocumentForm(request.POST, request.FILES)
		if form.is_valid():
			form.save()
			return render(request,'elmatrico/index.html')
        else:
        	form = DocumentForm()
        	return render(request, 'elmatrico/index.html', {
        	'form': form
    })
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm, RegisterForm

# Create your views here.
def index(request):
	return render(request,'Auth/loginhome.html',{'LoginForm':LoginForm,'RegisterForm':RegisterForm})

def home(request):
	return render(request,'webapp/index.html')


def Login(request):
	if request.method == "POST":
		form = LoginForm(request.POST)
		if form.is_valid():
			username = form.cleaned_data['username']
			password = form.cleaned_data['password']
			user = authenticate(username=username,password=password)
			if user is not None:
				login(request,user)
				return redirect(home)
			else:
				return HttpResponse('invalid username or password')
		else:
			return HttpResponse("form doesn't valid")

def Register(request):
	if request.method == "POST":
		form = RegisterForm(request.POST)
		if form.is_valid():
			user = form.save(commit=False)
			username = form.cleaned_data['username']
			password1 = form.cleaned_data['password1']
			password2 = form.cleaned_data['password2']

			if password1 == password2:
				user.set_password(password1)
				user.save()
				recent_user = authenticate(username=username,password=password1)
				login(request,recent_user)
				return redirect(home)
			else:
				return HttpResponse("password doesn't match")
		else:
			return HttpResponse("failed")
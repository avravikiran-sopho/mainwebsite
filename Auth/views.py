from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm, RegisterForm ,ProfileForm
from .models import Profile
from django.contrib.auth.decorators import login_required 
from django.core.mail import EmailMessage
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from .tokens import account_activation_token
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.http import HttpResponseRedirect
from django.utils.timezone import localtime, now
from smtplib import SMTPException

# Create your views here.
def index(request):
	return render(request,'Auth/loginhome2.html',{'LoginForm':LoginForm,'RegisterForm':RegisterForm,'ProfileForm':ProfileForm})

def beta(request):
	return render( request,'beta/index.html' )

def home(request):
	profile = Profile.objects.get(user = request.user)
	return render(request,'elmatrico/index.html',{'profile':profile})

def Login(request):
	if request.method == "POST":
		form = LoginForm(request.POST)
		if form.is_valid():
			username = form.cleaned_data['username']
			password = form.cleaned_data['password']
			user = authenticate(username=username,password=password)
			if user is not None:
				print user.id
				login(request,user)
				profile = Profile.objects.get(user = user)
				return HttpResponseRedirect("/newsite/dashboard")
			else:
				message = "username or password is incorrect"
				# raise forms.ValidationError("Invalid username or password")
				return render(request,'Auth/loginhome2.html',{'message':message,'LoginForm':LoginForm,'RegisterForm':RegisterForm,'ProfileForm':ProfileForm})
		else:
			message = "Form is not valid"
			return render(request,'Auth/loginhome2.html',{'message':message,'LoginForm':LoginForm,'RegisterForm':RegisterForm,'ProfileForm':ProfileForm})
	else:
		return render(request,'Auth/loginhome2.html',{'LoginForm':LoginForm,'RegisterForm':RegisterForm,'ProfileForm':ProfileForm})



def Register(request):
	register = 'register'
	if request.method == "POST":
		form1 = RegisterForm(request.POST)
		form2 = ProfileForm(request.POST)
		print form1.errors
		print form2.errors
		if form1.is_valid() & form2.is_valid():
			user = form1.save(commit=False)
			user.is_active = False
			username = form1.cleaned_data['username']
			password1 = form1.cleaned_data['password1']
			password2 = form1.cleaned_data['password2']
			profile = form2.save(commit=False)
			if password1 == password2:
				user.set_password(password1)
				user.save()
				new_object=Profile()
				# recent_user = authenticate(username=username,password=password1)
				user = User.objects.get(username=username)
				new_object.user = User.objects.get(username=username)
				new_object.college = form2.cleaned_data['college']
				new_object.mobile = form2.cleaned_data['mobile']
				new_object.adress = form2.cleaned_data['adress']
				new_object.city = form2.cleaned_data['city']
				new_object.zipcode = form2.cleaned_data['zipcode']
				new_object.country = form2.cleaned_data['country']
				new_object.gender = form2.cleaned_data['gender']
				new_object.full_name = form2.cleaned_data['full_name']
				new_object.elanids = user.id
				new_object.save()
				try:
					current_site = get_current_site(request)
					mesage = render_to_string('acc_active_email.html', {
						'user':user, 
						'domain':current_site.domain,
						'uid': urlsafe_base64_encode(force_bytes(user.pk)),
						'token': account_activation_token.make_token(user),
					})		
					mail_subject = 'Activate your ElanNvision account.'
					to_email = form1.cleaned_data.get('username')
					email = EmailMessage(mail_subject, mesage, to=[to_email])
					email.send()
					#login(request,user)
					return render(request,'webapp/openmail.html')
				except Exception,e:
                                        print str(e)
					user = User.objects.get(username=username)
					user.is_active = True
					user.save()
					login(request,user)
					return HttpResponseRedirect("/newsite/dashboard")
			else:
				message = "Password dont match"
			return render(request,'Auth/loginhome2.html',{'LoginForm':LoginForm,'RegisterForm':RegisterForm,'ProfileForm':ProfileForm,'message':message,'register':register})
		else:
			message = "Email already exists"
			return render(request,'Auth/loginhome2.html',{'LoginForm':LoginForm,'RegisterForm':RegisterForm,'ProfileForm':ProfileForm,'message':message,'register':register})
	else:
		return render(request,'Auth/loginhome2.html',{'LoginForm':LoginForm,'RegisterForm':RegisterForm,'ProfileForm':ProfileForm,'register':register})



# def Register(request):
#     if request.method == 'POST':
#         user_form = RegisterForm(request.POST)
#         profile_form = ProfileForm(request.POST)
#         if user_form.is_valid() and profile_form.is_valid():
#         	user = user_form.save(commit=False)
#         	profile = profile_form.save(commit=False)
#         	password1 = user_form.cleaned_data['password1']
#         	password2 = user_form.cleaned_data['password2']
#         	if password1 == password2:
#  				user.set_password(password1)
#  				user.save()
#  				profile.save()
#  				recent_user = authenticate(username=username,password=password1)
#  				login(request,recent_user)
# 				return redirect(home)
            
#         else:
#             return HttpResponse("failed1")
#     else:
#         return HttpResponse("failed2")

def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        profile = Profile.objects.get(user = user)
        login(request, user)
        return render(request,'webapp/linkconfirm.html',{'profile':profile})
    else:
        return HttpResponse('Activation link is invalid!')



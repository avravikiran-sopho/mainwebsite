from django.contrib.auth.models import User
from django import forms
from .models import Profile
CHOICES=[('male','male'),
         ('female','female')]


class LoginForm(forms.Form):
	username = forms.CharField(widget = forms.TextInput(attrs=
		{'name':"username",'id':"username",'class':"logininput",'placeholder':"Email"}))
	password = forms.CharField(widget = forms.PasswordInput(attrs=
		{'name':'password','id':'password','class':"logininput",'placeholder':'Password'}))



class ProfileForm(forms.ModelForm):
	college = forms.CharField(widget=forms.TextInput(attrs=
		{'name':"college",'id':"college",'placeholder':"college"}))
	mobile = forms.CharField(widget=forms.NumberInput(attrs=
		{'name':"mobile",'id':"mobile",'placeholder':"mobile"}))
	city = forms.CharField(widget=forms.TextInput(attrs=
		{'name':"city",'id':"city",'placeholder':"city"}))
	gender = forms.ChoiceField(choices=CHOICES, widget=forms.RadioSelect(attrs=
		{'name':"gender",'id':"gender",}))


	class Meta:
		model = Profile
		fields = ['college', 'mobile','city','gender']

class RegisterForm(forms.ModelForm):
	password1 = forms.CharField(widget=forms.PasswordInput(attrs=
		{'name':'password','id':'password','tabindex':'2','class':'form-control','placeholder':'Password'}))
	password2 = forms.CharField(widget=forms.PasswordInput(attrs=
		{'name':'confirm-password','id':'confirm-password','tabindex':'2','class':'form-control','placeholder':'Confirm Password'}))
	username = forms.CharField(widget=forms.TextInput(attrs=
		{'name':"username",'id':"name",'tabindex':"1",'class':"form-control",'placeholder':"Username"}))
	email = forms.CharField(widget=forms.EmailInput(attrs=
		{'name':"email",'id':"email",'tabindex':"1",'class':"form-control",'placeholder':"Email"}))
	
	class Meta:
		model = User
		fields = ['username','email','password1','password2']



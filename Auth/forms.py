from django.contrib.auth.models import User
from django import forms
from .models import Profile

class LoginForm(forms.Form):
	username = forms.CharField(max_length=15,widget = forms.TextInput(attrs=
		{'name':"username",'id':"username",'tabindex':"1",'class':"form-control",'placeholder':"Username"}))
	password = forms.CharField(max_length=15,widget = forms.PasswordInput(attrs=
		{'name':'password','id':'password','tabindex':'2','class':'form-control','placeholder':'Password'}))


class ProfileForm(forms.ModelForm):
	college = forms.CharField(widget=forms.TextInput(attrs=
		{'name':"college",'id':"college",'tabindex':"1",'class':"form-control",'placeholder':"college"}))
	mobile = forms.CharField(widget=forms.NumberInput(attrs=
		{'name':"mobile",'id':"mobile",'tabindex':"1",'class':"form-control",'placeholder':"mobile"}))
	city = forms.CharField(widget=forms.TextInput(attrs=
		{'name':"city",'id':"city",'tabindex':"1",'class':"form-control",'placeholder':"city"}))

	class Meta:
		model = Profile
		fields = ['college', 'mobile','city']

class RegisterForm(forms.ModelForm):

	password1 = forms.CharField(widget=forms.PasswordInput(attrs=
		{'name':'password','id':'password','tabindex':'2','class':'form-control','placeholder':'Password'}))
	password2 = forms.CharField(widget=forms.PasswordInput(attrs=
		{'name':'confirm-password','id':'confirm-password','tabindex':'2','class':'form-control','placeholder':'Confirm Password'}))
	username = forms.CharField(widget=forms.TextInput(attrs=
		{'name':"username",'id':"name",'tabindex':"1",'class':"form-control",'placeholder':"Username"}))
	
	class Meta:
		model = User
		fields = ['username','email','password1','password2']




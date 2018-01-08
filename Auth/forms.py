
from django.contrib.auth.models import User
from django import forms
from .models import Profile
from django_countries.widgets import CountrySelectWidget

CHOICES=[('male','Male'),
         ('female','Female')]


class LoginForm(forms.Form):
	username = forms.CharField(widget = forms.EmailInput(attrs=
		{'name':"username",'id':"username",'required':'required','placeholder':"Email"}))
	password = forms.CharField(widget = forms.PasswordInput(attrs=
		{'name':'password','id':'password','class':"logininput",'placeholder':'Password'}))



class ProfileForm(forms.ModelForm):
  college = forms.CharField(widget=forms.TextInput(attrs=
    {'name':"college",'id':"college",'placeholder':"college"}))
  full_name = forms.CharField(widget=forms.TextInput(attrs=
    {'name':"full_name",'id':"full_name",'placeholder':"Full name"}))
  mobile = forms.CharField(widget=forms.NumberInput(attrs=
    {'name':"mobile",'id':"mobile",'placeholder':"Mobile"}))
  city = forms.CharField(widget=forms.TextInput(attrs=
    {'name':"city",'id':"city",'placeholder':"City",'rows':"3"}))
  adress = forms.CharField(widget=forms.TextInput(attrs=
    {'name':"city1",'id':"city1",'placeholder':"Address",'rows':"3"}))
  gender = forms.ChoiceField(choices=CHOICES, widget=forms.RadioSelect(attrs=
    {'name':"gender",'id':"gender",}))
  zipcode = forms.CharField(widget=forms.NumberInput(attrs=
    {'name':"zipcode",'id':"zipcode",'placeholder':"Zipcode"}))
  class Meta:
    model = Profile
    fields = ['college', 'mobile','city','gender','country','zipcode']
    widgets = {'country': CountrySelectWidget()}

class RegisterForm(forms.ModelForm):
	password1 = forms.CharField(widget=forms.PasswordInput(attrs=
		{'name':'password','id':'password1','class':'form-control','placeholder':'Password'}))
	password2 = forms.CharField(widget=forms.PasswordInput(attrs=
		{'name':'confirm-password','id':'confirm-password','class':'form-control','placeholder':'Confirm Password'}))
	username = forms.CharField(widget=forms.EmailInput(attrs=
		{'name':"username",'id':"name",'tabindex':"1",'class':"form-control",'placeholder':"Email"}))
	
	class Meta:
		model = User
		fields = ['username','email','password1','password2']



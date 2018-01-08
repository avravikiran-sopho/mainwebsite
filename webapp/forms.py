from django.contrib.auth.models import User
from django import forms

from django.template.defaultfilters import filesizeformat
from django.utils.translation import ugettext_lazy as _
from django.conf import settings


class teamForm(forms.Form):
	elanid1 = forms.CharField(widget = forms.TextInput(attrs=
		{'name':"elanid1",'id':"username",'placeholder':"Elan ID"}))
	email1 = forms.CharField(widget = forms.EmailInput(attrs=
		{'name':"email1",'id':"username",'placeholder':"Email"}))

	elanid2 = forms.CharField(widget = forms.TextInput(attrs=
		{'name':"elanid2",'id':"username",'placeholder':"Elan ID"}))
	email2 = forms.CharField(widget = forms.EmailInput(attrs=
		{'name':"email2",'id':"username",'placeholder':"Email"}))

	elanid3 = forms.CharField(widget = forms.TextInput(attrs=
		{'name':"elanid3",'id':"username",'placeholder':"Elan ID"}))
	email3 = forms.CharField(widget = forms.EmailInput(attrs=
		{'name':"email3",'id':"username",'placeholder':"Email"}))

	elanid4 = forms.CharField(widget = forms.TextInput(attrs=
		{'name':"elanid4",'id':"username",'placeholder':"Elan ID"}))
	email4 = forms.CharField(widget = forms.EmailInput(attrs=
		{'name':"email4",'id':"username",'placeholder':"Email"}))

	elanid5 = forms.CharField(widget = forms.TextInput(attrs=
		{'name':"elanid5",'id':"username",'placeholder':"Elan ID"}))
	email5 = forms.CharField(widget = forms.EmailInput(attrs=
		{'name':"email15",'id':"username",'placeholder':"Email"}))





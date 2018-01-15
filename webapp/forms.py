from django.contrib.auth.models import User
from django import forms

from django.template.defaultfilters import filesizeformat
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from .models import Social

CHOICES=[('QUADCOPTER CHALLENGE','QUADCOPTER CHALLENGE'),
         ('DTMF RACE','DTMF RACE'),
         ('ELECTRONIC BLOOPERS','ELECTRONIC BLOOPERS'),
         ('JUGAAD IT','JUGAAD IT'),
         ('IOT CHALLENGE','IOT CHALLENGE'),
         ('JUNKYARD WARS','JUNKYARD WARS'),
         ('BRIDGE BUILDERS','BRIDGE BUILDERS'),
         ('SALESMAN OF FEST','SALESMAN OF FEST'),
         ('DRIFT KING','DRIFT KING'),
         ('CADPRO','CADPRO'),
         ('ROBOSOCCER','ROBOSOCCER'),
         ('ROBOWARS','ROBOWARS'),
         ('ROBO-PIRATES','ROBO-PIRATES'),
         ('GALILEO PROJECT','GALILEO PROJECT'),
         ('AQUANUT','AQUANUT'),
         ('ENIGMA','ENIGMA'),
         ('HACK-A-MAZE','HACK-A-MAZE'),
         ('SCIENCE QUIZ','SCIENCE QUIZ'),
         ('AUTOMOBILE QUIZ','AUTOMOBILE QUIZ'),
		 ('PAPER PRESENTATION','PAPER PRESENTATION'),]

class teamForm(forms.Form):
	event = forms.ChoiceField(choices=CHOICES)

	elanid1 = forms.CharField(widget = forms.TextInput(attrs=
		{'name':"elanid1",'id':"elanid1",'placeholder':"Elan ID - Team leader"}))
	email1 = forms.CharField(widget = forms.EmailInput(attrs=
		{'name':"email1",'id':"emailid1",'placeholder':"Email- Team leader"}))

	elanid2 = forms.CharField(widget = forms.TextInput(attrs=
		{'name':"elanid2",'id':"username",'placeholder':"Elan ID"}))
	email2 = forms.CharField(widget = forms.EmailInput(attrs=
		{'name':"email2",'id':"username",'placeholder':"Email"}))

	elanid3 = forms.CharField(required=False,widget = forms.TextInput(attrs=
		{'name':"elanid3",'id':"username",'placeholder':"Elan ID"}))
	email3 = forms.CharField(required=False,widget = forms.EmailInput(attrs=
		{'name':"email3",'id':"username",'placeholder':"Email"}))

	elanid4 = forms.CharField(required=False,widget = forms.TextInput(attrs=
		{'name':"elanid4",'id':"username",'placeholder':"Elan ID"}))
	email4 = forms.CharField(required=False,widget = forms.EmailInput(attrs=
		{'name':"email4",'id':"username",'placeholder':"Email"}))

	elanid5 = forms.CharField(required=False,widget = forms.TextInput(attrs=
		{'name':"elanid5",'id':"username",'placeholder':"Elan ID"}))
	email5 = forms.CharField(required=False,widget = forms.EmailInput(attrs=
		{'name':"email15",'id':"username",'placeholder':"Email"}))


class socialForm(forms.Form):

	class Meta:
		model = Social
		fields = ['name','email','message',]
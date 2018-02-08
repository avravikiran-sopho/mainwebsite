from django.contrib.auth.models import User
from django import forms

from django.template.defaultfilters import filesizeformat
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from .models import Social, EventName, EventRegister, SpokenWord

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
	 ('LINE ROBO','LINE ROBO')]

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
	name = forms.CharField(widget=forms.TextInput(attrs=
    	{'name':"name",'id':"c_name",'class':"form-control",'placeholder':"Name"}))
	email = forms.CharField(required=False,widget=forms.EmailInput(attrs=
    	{'name':"email",'id':"c_email",'class':"form-control",'placeholder':"Email"}))
	message = forms.CharField(required=False,widget=forms.Textarea(attrs=
    	{'name':"message",'id':"c_message",'class':"form-control",'placeholder':"Message"}))
	class Meta:
		model = Social
		fields = ['name','email','message',]

class spokenwordForm(forms.Form):
	name = forms.CharField(widget=forms.TextInput(attrs=
    	{'name':"name",'id':"c_name",'class':"form-control",'placeholder':"Name"}))
	email = forms.CharField(widget=forms.EmailInput(attrs=
    	{'name':"email",'id':"c_email",'class':"form-control",'placeholder':"Email"}))
	mobile = forms.CharField(widget=forms.NumberInput(attrs=
    	{'name':"mobile",'id':"c_message",'class':"form-control",'placeholder':"Mobile"}))
	class Meta:
		model = SpokenWord
		fields = ['name','email','mobile',]

# class eventsForm(forms.ModelForm):
# 	elanid = forms.CharField(widget=forms.TextInput(attrs=
#     	{'name':"elanid",'placeholder':"Elanid"}))
# 	events = forms.ModelChoiceField(queryset=EventName.objects.all())
# 	class Meta:
# 		model = EventName
#         fields = ['name']


class deregisterForm(forms.ModelForm):
    reg_events = forms.ModelChoiceField(queryset=EventRegister.objects.none())
    class Meta:
        model = EventRegister
        fields = ['event',]
    def __init__(self, user, *args, **kwargs):
        super(deregisterForm, self).__init__(*args, **kwargs)
        self.fields['reg_events'].queryset = EventRegister.objects.filter(user=user).values_list('event',flat=True)

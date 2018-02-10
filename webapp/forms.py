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

ALLEVENTS=[

	 	('QUADCOPTER CHALLENGE','QUADCOPTER CHALLENGE'),
	 	('BREAKFREE - DUET','BREAKFREE - DUET'),
	 	('BREAKFREE - SOLO DANCE','BREAKFREE - SOLO DANCE'),
	 	('BREAKFREE - GROUP DANCE','BREAKFREE - GROUP DANCE'),
	 	('HELLO WORLD','HELLO WORLD'),
	 	('ELAN-E-JUNG','ELAN-E-JUNG'),
	 	('FEMINA','FEMINA'),
	 	('MANTHAN','MANTHAN'),
	 	('QUIZ CONCLAVE','QUIZ CONCLAVE'),
	 	('MR DETECTIVE','MR DETECTIVE'),
	 	('COFFEE CONVERSATION','COFFEE CONVERSATION'),
	 	('PAPER PLANE','PAPER PLANE'),
	 	('WHEEL OF FORTUNE','WHEEL OF FORTUNE'),
	 	('SOCIAL EXPERIMENT','SOCIAL EXPERIMENT'),
	 	('WALK THE RAMP','WALK THE RAMP'),
	 	('MADADS','MADADS'),
	 	('MINUTE TO WIN IT','MINUTE TO WIN IT'),
	 	('CASINO','CASINO'),
	 	('FOODATHON','FOODATHON'),
	 	('FINAL DESTINATION','FINAL DESTINATION'),
	 	('LAN GAMING','LAN GAMING'),
	 	('QUADCOPTER CHALLENGE','QUADCOPTER CHALLENGE'),
	 	('PAPER PRESENTATION','PAPER PRESENTATION'),
	 	('ELMATRICO','ELMATRICO'),
	 	('AUTOMOBILE QUIZ','AUTOMOBILE QUIZ'),
	 	('SCIENCE QUIZ','SCIENCE QUIZ'),
	 	('ALGORITHMA','ALGORITHMA'),
	 	('PRO-QUEST','PRO-QUEST'),
	 	('HACK-A-MAZE','HACK-A-MAZE'),
	 	('ENIGMA','ENIGMA'),
	 	('AQUANUT','AQUANUT'),
	 	('GALILEO PROJECT','GALILEO PROJECT'),
	 	('LINE ROBO','LINE ROBO'),
	 	('ROBO-PIRATES','ROBO-PIRATES'),
	 	('ROBOSOCCER','ROBOSOCCER'),
	 	('ROBOWARS','ROBOWARS'),
	 	('CADPRO','CADPRO'),
	 	('DRIFT KING','DRIFT KING'),
	 	('SALESMAN OF FEST','SALESMAN OF FEST'),
	 	('CROWD PITCH','CROWD PITCH'),
	 	('BRIDGE BUILDERS','BRIDGE BUILDERS'),
	 	('JUNKYARD WARS','JUNKYARD WARS'),
	 	('IOT CHALLENGE','IOT CHALLENGE'),
	 	('JUGAAD IT','JUGAAD IT'),
	 	('ELECTRONIC BLOOPERS','ELECTRONIC BLOOPERS'),
	 	('DTMF RACE','DTMF RACE'),
	 	('RJ HUNT','RJ HUNT'),
	 	('CLAY MODELLING','CLAY MODELLING'),
	 	('MEHENDI','MEHENDI'),
	 	('NAIL ART','NAIL ART'),
	 	('ART GALLERY','ART GALLERY'),
	 	('FACE PAINTING','FACE PAINTING'),
	 	('PICELECTIC','PICELECTIC'),
	 	('FILM FARE FIESTA','FILM FARE FIESTA'),
	 	('LEND YOUR VOICE','LEND YOUR VOICE'),
	 	('THE STAGE','THE STAGE'),
	 	('STAND UP','STAND UP'),
	 	('NUKKAD NAATAK','NUKKAD NAATAK'),
	 	('DJ WARS','DJ WARS'),
	 	('OCTAVE','OCTAVE'),
	 	('VIBRAZIONE','VIBRAZIONE'),
	 	('STEP UP','STEP UP'),
	 	('NRITHYANJALI','NRITHYANJALI'),
	 	('BREAKFREE','BREAKFREE')]

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

class teamadminForm(forms.Form):
	event = forms.ChoiceField(choices=CHOICES)

	elanid1 = forms.CharField(widget = forms.TextInput(attrs=
		{'name':"elanid1",'id':"elanid1",'placeholder':"Elan ID - Team leader"}))
	
	elanid2 = forms.CharField(widget = forms.TextInput(attrs=
		{'name':"elanid2",'id':"username",'placeholder':"Elan ID"}))

	elanid3 = forms.CharField(required=False,widget = forms.TextInput(attrs=
		{'name':"elanid3",'id':"username",'placeholder':"Elan ID"}))
	
	elanid4 = forms.CharField(required=False,widget = forms.TextInput(attrs=
		{'name':"elanid4",'id':"username",'placeholder':"Elan ID"}))
	
	elanid5 = forms.CharField(required=False,widget = forms.TextInput(attrs=
		{'name':"elanid5",'id':"username",'placeholder':"Elan ID"}))
	

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

class eventsForm(forms.Form):
	elanid = forms.CharField(widget=forms.TextInput(attrs=
    	{'name':"elanid",'placeholder':"Elan ID"}))
	events = forms.ChoiceField(choices=ALLEVENTS)

class addteamForm(forms.Form):
	elanid = forms.CharField(widget=forms.TextInput(attrs=
    	{'name':"elanid",'placeholder':"Elan ID"}))
	teamid = forms.CharField(widget=forms.TextInput(attrs=
    	{'name':"teamid",'placeholder':"Team ID"}))
	
class deregisterForm(forms.ModelForm):
    reg_events = forms.ModelChoiceField(queryset=EventRegister.objects.none())
    class Meta:
        model = EventRegister
        fields = ['event',]
    def __init__(self, user, *args, **kwargs):
        super(deregisterForm, self).__init__(*args, **kwargs)
        self.fields['reg_events'].queryset = EventRegister.objects.filter(user=user).values_list('event',flat=True)

from django.contrib.auth.models import User
from django import forms
from .models import player
from django.template.defaultfilters import filesizeformat
from django.utils.translation import ugettext_lazy as _
from django.conf import settings


class playerForm(forms.ModelForm):
	pname = forms.CharField(label="Player Name:",widget=forms.TextInput(attrs=
		{'name':"pname",'id':"pname",'placeholder':"Enter player name",}))
	class Meta:
		model = player
		fields = ('pname', )


class answerForm(forms.Form):
	answer = forms.CharField(widget=forms.TextInput(attrs=
    {'name':"answer",'id':"answer",'placeholder':"Enter your answer"}))



from django.contrib.auth.models import User
from django import forms
from .models import Document
from django.template.defaultfilters import filesizeformat
from django.utils.translation import ugettext_lazy as _
from django.conf import settings


class teamForm(forms.ModelForm):
	document = forms.FileField(widget = forms.FileInput(attrs=
		{'name':'myfile','id':'file','placeholder':'Upload your zip file'}))




from django.contrib.auth.models import User
from django import forms
from .models import paperpt
from django.template.defaultfilters import filesizeformat
from django.utils.translation import ugettext_lazy as _
from django.conf import settings


class paperptForm(forms.ModelForm):
	file = forms.FileField(widget = forms.FileInput(attrs=
		{'name':'myfile','id':'file','placeholder':'Upload your zip file'}))
	class Meta:
		model = paperpt
		fields = ('file', )




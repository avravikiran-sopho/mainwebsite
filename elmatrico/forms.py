from django.contrib.auth.models import User
from django import forms
from .models import Document

class DocumentForm(forms.ModelForm):
	document = forms.FileField(widget = forms.FileInput(attrs=
		{'name':'myfile','id':'file','placeholder':'Upload your zip file'}))
	class Meta:
		model = Document
		fields = ('document', )




from django.contrib.auth.models import User
from django import forms
from .models import Document

class DocumentForm(forms.ModelForm):

	document = forms.FileField(widget=forms.FileInput(attrs=
		{'name':'myfile','id':'file','tabindex':'2','class':'form-control inputfield',}))
	class Meta:
		model = Document
		fields = ('document',)




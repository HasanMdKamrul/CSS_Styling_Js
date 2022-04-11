from django import forms
from django.forms import fields

from .models import To_do

class TodoModelForm(forms.ModelForm):

    class Meta:
        model = To_do
        fields = (
            "name",
            "due_date",
        )
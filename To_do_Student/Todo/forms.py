from django import forms
from django.forms import fields

from .models import Todo

class Todo_Form(forms.ModelForm):

    class Meta:
        model = Todo
        fields= (
            "name",
            "due_date",
        )
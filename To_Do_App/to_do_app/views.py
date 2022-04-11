from django.shortcuts import render
from django.http import HttpResponse

def Todo_list(request):
    return render(request,"todolist2.html")
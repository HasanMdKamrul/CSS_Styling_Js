from django.shortcuts import redirect, render

from .models import Todo
from .forms import Todo_Form

def Todo_list(request):
    Todo_list = Todo.objects.all()
    context = {
        "Todo_list":Todo_list
    }

    return render(request,"Todo/todo_list.html", context)

def Todo_detail(request,pk):

    todo = Todo.objects.get(id=pk)

    context = {
        "todo":todo,
    }

    return render(request,"Todo/todo_detail.html", context)

def Todo_create(request):
    todo_create = Todo_Form(request.POST or None)

    if todo_create.is_valid():
        todo_create.save()
        return redirect('/')
    
    context = {
        "new_todo":todo_create
    }
    return render(request,"Todo/todo_create.html", context)

def Todo_update(request,pk):
    todo = Todo.objects.get(id=pk)

    todo_form = Todo_Form(request.POST or None, instance=todo)

    if todo_form.is_valid():
        todo_form.save()
        return redirect('/')
    
    context = {
        "todo_form":todo_form
    }
    
    return render(request,"Todo/todo_update.html", context)

def Todo_delete(request,pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()
    return redirect("/")
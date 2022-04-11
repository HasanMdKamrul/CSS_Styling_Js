from django.shortcuts import redirect, render, reverse 


from django.views import generic
from django.views.generic.edit import DeleteView
from .models import To_do
from .forms import TodoModelForm

#templates-> to_do_app--> name of the template
#CURD --> Create, Update, Retrieve, Delete, List

class TodoListView(generic.ListView):
    model = To_do
    template_name = "to_do_app/todo_list.html"
    context_object_name = "todo"


class TodoCreateView(generic.CreateView):
    model = To_do
    template_name = "to_do_app/todo_create.html"
    form_class = TodoModelForm

    def get_success_url(self):
        return reverse("to_do_app:list_view")


class TodoDetailView(generic.DetailView):
    model = To_do
    template_name = "to_do_app/todo_detail.html"
    context_object_name = "todo"

    def get_queryset(self):
        queryset = super(TodoDetailView, self).get_queryset()
        queryset = queryset # TODO
        return queryset


class TodoUpdateView(generic.UpdateView):
    model = To_do
    template_name = "to_do_app/todo_update.html"
    context_object_name = "todo"
    form_class = TodoModelForm

    def get_success_url(self):
        return reverse("to_do_app:list_view")

    def get_queryset(self):
        return super().get_queryset()



class TodoDeleteView(generic.DeleteView):
    model = To_do
    template_name = "to_do_app/todo_delete.html"
    context_object_name = "todo"

    def get_queryset(self):
        return super().get_queryset()

    def get_success_url(self):
        return reverse("to_do_app:list_view")

def TodoDelete(request,pk):
    todo = To_do.objects.get(id=pk)
     todo.delete()
    return redirect("/")


    


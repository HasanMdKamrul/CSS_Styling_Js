from django.urls import path

from .views import Todo_list,Todo_detail,Todo_create,Todo_update,Todo_delete

app_name = "todo"


urlpatterns = [
    path('', Todo_list ),
    path('create/', Todo_create, name="todo_create" ),
    path('<int:pk>/', Todo_detail, name="todo_detail" ),
    path('<int:pk>/update/', Todo_update, name="todo_update" ),
    path('<int:pk>/delete/', Todo_delete, name="todo_delete" ),
]
from django.contrib import admin
from django.urls import path
from to_do_app.views import Todo_list

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',Todo_list),
]

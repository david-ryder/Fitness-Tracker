from django.contrib import admin
from django.urls import path, include
from login.views import *

urlpatterns = [
	path('admin/', admin.site.urls),
	path('wel/', ReactAPI.as_view()),
]

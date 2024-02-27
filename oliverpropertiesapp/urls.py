from django.urls import path
from oliverpropertiesapp import views


urlpatterns = [
    path('', views.Home, name="Home"),

]


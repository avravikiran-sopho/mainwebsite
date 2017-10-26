
from . import views
from django.conf.urls import include,url

urlpatterns = [
	url(r'^$', views.index),
    url(r'team', views.team),
    url(r'events', views.events),
    url(r'events/(?P<name>.+)',views.details,name='details')
]

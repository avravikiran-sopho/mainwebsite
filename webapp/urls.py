
from . import views
from django.conf.urls import include,url

urlpatterns = [
	url(r'^$', views.index),
    url(r'^team$', views.team),
    url(r'^events$', views.events),
    url(r'^dashboard$', views.dashboard),
    url(r'^sponsors$',views.sponsors),
    url(r'^pronites$', views.pronites),
    url(r'^workshops$', views.workshops),
    url(r'^events/(?P<name>.+)$',views.details),
    url(r'^register/(?P<eventname>.+)$',views.eventregister,name='eventregister')
]

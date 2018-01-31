
from . import views
from django.conf.urls import include,url
from django.views.static import serve
from django.conf import settings

urlpatterns = [
	url(r'^$', views.index),
    url(r'^mobile/$', views.mobile),
    url(r'^team$', views.team),
    url(r'^events$', views.events),
    url(r'^dashboard$', views.dashboard),
    url(r'^sponsors$',views.sponsors),
    url(r'^pronites$', views.pronites),
    url(r'^workshops$', views.workshops),
    url(r'^cisco$', views.cisco),
    url(r'^hackathon$', views.hackathon),
    url(r'^facebookbot$', views.facebookbot),
    url(r'^events/(?P<name>.+)$',views.details),
    url(r'^register/(?P<eventname>.+)$',views.eventregister,name='eventregister'),
    url(r'^team_register/$',views.team_register),
    url(r'^mypledge$', views.social),
	url(r'^deregister$', views.deregister),
	url(r'^litfest$', views.litfest),
	url(r'^spokenword$', views.spokenword),
	url(r'^media/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
    # url(r'^mypledge_message$', views.message),
]

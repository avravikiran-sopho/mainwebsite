
from . import views
from django.conf.urls import include,url

urlpatterns = [
	url(r'^$', views.index),
	url(r'^about$', views.about),
	url(r'^events$', views.events),
	url(r'^sponsors$', views.sponsors),
	url(r'^workshops$', views.workshops),
	url(r'^team$', views.team),
	url(r'^ca$', views.ca),
	url(r'^networking$', views.n0teworking),
	url(r'^facebookbot$', views.facebookbot),

]

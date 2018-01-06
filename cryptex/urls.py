
from . import views
from django.conf.urls import include,url

urlpatterns = [
	url(r'^$', views.index),
	url(r'^validate/$', views.validate),
	url(r'^leaderboard/$', views.leaderboard),

]

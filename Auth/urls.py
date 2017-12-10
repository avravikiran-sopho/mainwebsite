from django.conf.urls import url, include
from django.contrib.auth.views import logout
from . import views 
from django.contrib.auth import views as auth_views

urlpatterns = [
	url(r'^$',views.index),
	# url(r'^LoginRegister/',views.logreg),
	url(r'^do_login/$',views.Login),
	url(r'^do_register/$',views.Register),
	url(r'^home/$',views.home),
	url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',views.activate, name='activate'),
	url(r'logout', logout, {'next_page': '/'}),
	
	# url(r'^login/$', auth_views.login, name='login'),
 #    url(r'^logout/$', auth_views.logout, name='logout'),
 #    url(r'^oauth/', include('social_django.urls', namespace='social')),

]
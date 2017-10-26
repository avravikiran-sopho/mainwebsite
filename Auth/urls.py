from django.conf.urls import url, include
from django.contrib.auth.views import logout
from . import views 

urlpatterns = [
	url(r'^$',views.index),
	# url(r'^LoginRegister/',views.logreg),
	url(r'do_login/',views.Login),
	url(r'do_register/',views.Register),
	url(r'home/',views.home),
	url(r'logout', logout, {'next_page': '/'}),

]
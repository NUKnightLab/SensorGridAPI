from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    url(r'^api/$', views.api_list),
    url(r'^api/(?P<pk>[0-9]+)/$', views.api_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)

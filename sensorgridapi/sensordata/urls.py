from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from sensordata import views

urlpatterns = [
    url(r'^sensordata/$', views.sensordata_list),
    url(r'^sensordata/(?P<pk>[0-9]+)/$', views.sensordata_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)

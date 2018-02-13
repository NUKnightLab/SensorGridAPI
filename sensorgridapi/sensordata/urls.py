from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from sensordata import views
from sensordata.views import SensorDataList

urlpatterns = [
    url(r'^sensordata/$', views.sensordata_list),
    url('^sensordata/(?P<battery>.+)/$', views.sensordata_list),

]

urlpatterns = format_suffix_patterns(urlpatterns)

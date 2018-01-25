from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from requeststest import views

urlpatterns = [
    url(r'^requeststest/$', views.requeststest_list),
    url(r'^requeststest/(?P<pk>[0-9]+)/$', views.requeststest_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)

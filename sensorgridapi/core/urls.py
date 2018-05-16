"""sensorgridapi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework_nested import routers
from rest_framework import serializers, viewsets
from django.contrib import admin
from sensordata.models import SensorData, Network, Data
from sensordata import views
from sensordata.views import SensorDataList
from rest_framework import status
from rest_framework.response import Response


# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# grabs SensorData data model from sensordata/models.py
class SensorDataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SensorData
        # exclude means include all fields
        exclude = []


class NetworkSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Network
        # exclude means include all fields
        exclude = []
        #fields = ('json',)

class DataSerializer(serializers.ModelSerializer):
    #json = serializers.JSONField()

    class Meta:
        model = Data
        # exclude means include all fields
        exclude = []
        #fields = ('json',)


#class DataSerializer(serializers.BaseSerializer):
#    class Meta:
#        model = Data
#        fields = ('json',)

# shove the view into urls.py but it's the controller (handles request, returns response)
# viewset = view.
# response needs to be serialized. It's a json payload (serializer takes a model, converts to json)
# queryset grabs the actual data within the SensorData model
# serializer_class sets the serializer for the sensor data to be the SensorData model we created

class SensorDataViewSet(viewsets.ModelViewSet):
    queryset = SensorData.objects.all()
    serializer_class = SensorDataSerializer


class NetworkViewSet(viewsets.ModelViewSet):
    model = Network
    queryset = Network.objects.all()
    serializer_class = NetworkSerializer

class DataViewSet(viewsets.ModelViewSet):
    model = Data
    queryset = Data.objects.all()
    serializer_class = DataSerializer
    #filter_fields = ['json']

    def get_queryset(self):
        q = Data.objects.all()
        type_ = self.request.GET.get('type')
        if type_ == 'bat':
            q = q.filter(bat__isnull=False)
        if type_ == 'hpm':
            q = q.filter(hpm__isnull=False)
        return q

    def create(self, request, *args, **kwargs):
        #print(args)
        #print(kwargs)
        data = request.data
        for d in data:
            d['network'] = kwargs['network_pk']
        print(data)
        serializer = self.get_serializer(data=data, many=True)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

# Routers provide an easy way of automatically determining the URL configuration.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
# for REST api, handles incoming requests. When it gets a sensordata request,
# routers say which view to route it to
#router.register(r'data', SensorDataViewSet)
router.register(r'data', DataViewSet)

#router = routers.DefaultRouter()
router.register(r'networks', NetworkViewSet)
network_router = routers.NestedSimpleRouter(router, r'networks', lookup='network')
network_router.register(r'data', DataViewSet, base_name='network-data')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
# Create url extensions, and assign url frameworks to each extension
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^', include(network_router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # url(r'^', include('sensordata.urls')),
    url(r'^sensordata/$', views.sensordata_list),
    url('^sensordata/(?P<battery>.+)/$', SensorDataList.as_view()),
]

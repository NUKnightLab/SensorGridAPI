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
from rest_framework import routers, serializers, viewsets
from django.contrib import admin
from api.models import SensorData

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# grabs SensorData data model from api/models.py
class SensorDataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SensorData
        # exclude means include all fields
        exclude = []

# shove the view into urls.py but it's the controller (handles request, returns response)
# viewset = view.
# response needs to be serialized. It's a json payload (serializer takes a model, converts to json)
# queryset grabs the actual data within the SensorData model
# serializer_class sets the serializer for the sensor data to be the SensorData model we created

class SensorDataViewSet(viewsets.ModelViewSet):
    queryset = SensorData.objects.all()
    serializer_class = SensorDataSerializer

# Routers provide an easy way of automatically determining the URL configuration.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
# for REST api, handles incoming requests. When it gets a sensordata request,
# routers say which view to route it to
router.register(r'data', SensorDataViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
# Create url extensions, and assign url frameworks to each extension
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

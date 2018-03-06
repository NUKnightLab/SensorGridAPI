from rest_framework import serializers
from sensordata.models import SensorData

# serialize all data fields 
class SensorDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('id', 'battery', 'created_at', 'data', 'data_type', 'message_id', 'network', 'node_id', 'latitude', 'longitude', 'ram', 'recieved_at', 'record_id', 'timestamp', 'version')
        exclude = []

# serialize only one data field
class SensorDataSerializer_battery(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('battery',)
        exclude = []

class SensorDataSerializer_created_at(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('created_at',)
        exclude = []

class SensorDataSerializer_data(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('data',)
        exclude = []

class SensorDataSerializer_data_type(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('data_type',)
        exclude = []

class SensorDataSerializer_message_id(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('message_id',)
        exclude = []

class SensorDataSerializer_network(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('network',)
        exclude = []

class SensorDataSerializer_node_id(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('node_id',)
        exclude = []

class SensorDataSerializer_ram(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('ram',)
        exclude = []

class SensorDataSerializer_recieved_at(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('recieved_at',)
        exclude = []

class SensorDataSerializer_record_id(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('record_id',)
        exclude = []

class SensorDataSerializer_timestamp(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('timestamp',)
        exclude = []

class SensorDataSerializer_version(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('version',)
        exclude = []

class SensorDataSerializer_latitude(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('latitude',)
        exclude = []

class SensorDataSerializer_longitude(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('longitude',)
        exclude = []

# serialize multiple, but not all, data fields
class SensorDataSerializer_battery_created_at(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('battery','created_at',)
        exclude = []

class SensorDataSerializer_battery_node_id(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('battery','node_id',)
        exclude = []

class SensorDataSerializer_data_node_id(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('data','node_id',)
        exclude = []

class SensorDataSerializer_data_data_type(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('data','data_type',)
        exclude = []

class SensorDataSerializer_timestamp_node_id(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('timestamp','node_id',)
        exclude = []

class SensorDataSerializer_data_node_id_data_type(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('data','node_id','data_type',)
        exclude = []

class SensorDataSerializer_latitude_longitude_node_id(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('latitude','longitude', 'node_id',)
        exclude = []

class SensorDataSerializer_latitude_node_id(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('latitude','node_id',)
        exclude = []

class SensorDataSerializer_longitude_node_id(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('longitude','node_id',)
        exclude = []

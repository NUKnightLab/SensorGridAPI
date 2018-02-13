from rest_framework import serializers
from sensordata.models import SensorData


class SensorDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('id', 'battery', 'created_at', 'data1', 'data2', 'data3', 'message_id', 'network', 'node_id', 'ram', 'recieved_at', 'record_id', 'timestamp', 'version')
        exclude = []

# may need different serializers for post and getf
# not going to post an id, for example


# class SensorDataSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     battery = serializers.DecimalField(decimal_places=2, max_digits=3)
#     created_at = serializers.DateTimeField()
#     data1 = serializers.IntegerField()
#     data2 = serializers.IntegerField()
#     data3 = serializers.IntegerField()
#     message_id = serializers.IntegerField()
#     network = serializers.IntegerField()
#     node_id = serializers.IntegerField()
#     ram = serializers.IntegerField()
#     recieved_at = serializers.DateTimeField(read_only=True)
#     record_id = serializers.CharField(allow_blank=True, max_length=100)
#     timestamp = serializers.DateTimeField(read_only=True)
#     version = serializers.IntegerField()
#
#
#     def create(self, validated_data):
#         """
#         Create and return a new `SensorData` instance, given the validated data.
#         """
#         return SensorData.objects.create(**validated_data)
#
#     def update(self, instance, validated_data):
#         """
#         Update and return an existing `SensorData` instance, given the validated data.
#         """
#         instance.battery = validated_data.get('battery', instance.battery)
#         instance.created_at = validated_data.get('created_at', instance.created_at)
#         instance.data1 = validated_data.get('data1', instance.data1)
#         instance.instance.data2 = validated_data.get('data2', instance.data2)
#         instance.data3 = validated_data.get('data3', instance.data3)
#         instance.message_id = validated_data.get('message_id', instance.message_id)
#         instance.network = validated_data.get('network', instance.network)
#         instance.node_id = validated_data.get('node_id', instance.node_id)
#         instance.ram = validated_data.get('ram', instance.ram)
#         instance.recieved_at = validated_data.get('recieved_at', instance.recieved_at)
#         instance.record_id = validated_data.get('record_id', instance.record_id)
#         instance.timestamp = validated_data.get('timestamp', instance.timestamp)
#         instance.version = validated_data.get('version', instance.version)
#         instance.save()
#         return instance

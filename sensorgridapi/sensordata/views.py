from rest_framework import status
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from sensordata.models import SensorData
from sensordata.serializers import SensorDataSerializer
from sensordata.models import SensorData


@api_view(['GET', 'POST'])
def sensordata_list(request, format=None):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        sensordata = SensorData.objects.all()
        serializer = SensorDataSerializer(sensordata, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SensorDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def sensordata_detail(request, pk, format=None):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        sensordata = SensorData.objects.get(pk=pk)
    except SensorData.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SensorDataSerializer(sensordata)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SensorDataSerializer(sensordata, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        sensordata.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class SensorDataList(generics.ListAPIView):
    serializer_class = SensorDataSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = SensorData.objects.all()
        battery = self.request.query_params.get('battery', None)
        if battery is not None:
            queryset = queryset.filter(sensordata__battery=battery)
        return queryset

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import SensorData
from api.serializers import SensorDataSerializer


@api_view(['GET', 'POST'])
def api_list(request, format=None):
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
def api_detail(request, pk, format=None):
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

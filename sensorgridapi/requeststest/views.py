from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from requeststest.models import Requeststest
from requeststest.serializers import RequeststestSerializer


@api_view(['GET', 'POST'])
def requeststest_list(request, format=None):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        requeststest = requeststest.objects.all()
        serializer = requeststestSerializer(requeststest, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RequeststestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def requeststest_detail(request, pk, format=None):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        requeststest = Requeststest.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RequeststestSerializer(requeststest)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RequeststestSerializer(requeststest, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        requeststest.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

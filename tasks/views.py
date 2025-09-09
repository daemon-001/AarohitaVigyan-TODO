from rest_framework import generics, status
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from .models import Task
from .serializers import TaskSerializer


class TaskListCreateView(generics.ListCreateAPIView):
    """
    GET /api/tasks/ - List all tasks
    POST /api/tasks/ - Create a new task
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['priority', 'is_done']
    search_fields = ['title']


class TaskToggleView(generics.UpdateAPIView):
    """
    PATCH /api/tasks/<id>/ - Toggle task is_done status
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def patch(self, request, *args, **kwargs):
        task = self.get_object()
        task.is_done = not task.is_done
        task.save()
        serializer = self.get_serializer(task)
        return Response(serializer.data)





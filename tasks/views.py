from rest_framework import generics, status
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer


class TaskListCreateView(generics.ListCreateAPIView):
    """
    GET /api/tasks/ - List all tasks
    POST /api/tasks/ - Create a new task
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


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





from django.http import JsonResponse
import datetime

from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from wind.models import Project, WTG
from wind.serializers import ProjectSerializer


class ProjectsView(APIView):

    @method_decorator(cache_page(60*60*2))
    def get(self, request):

        projects = list(Project.objects.all().values())
        for project in projects:
            project['WTG_numbers'] = ','.join([wtg.WTG_number for wtg in WTG.objects.filter(project_id=project.get('id'))])
            project['total_kW'] = sum([wtg.kW for wtg in WTG.objects.filter(project_id=project.get('id'))])
            project['months_acquired'] = None if not project.get('acquisition_date') else (datetime.date.today().year - project.get('acquisition_date').year) * 12 + \
                                        (datetime.date.today().month - project.get('acquisition_date').month)
        return JsonResponse(list(projects), safe=False)

    def post(self, request):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProjectsViewUpdateDelete(APIView):

    def put(self, request, pk):
        data = request.data
        project = Project.objects.get(id=pk)
        for key, value in data.items():
            setattr(project, key, value)
        project.save()
        return Response(status=status.HTTP_200_OK)

    def delete(self, request, pk):
        Project.objects.get(id=pk).delete()
        return Response(status=status.HTTP_200_OK)


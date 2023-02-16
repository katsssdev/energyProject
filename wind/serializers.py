from rest_framework import serializers
from wind.models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('project_name', 'project_number', 'number_3l_code', 'project_deal_type_id',
                  'project_group_id', 'project_status_id', 'company_id')

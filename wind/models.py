import uuid
import datetime

from django.db import models

# Create your models here.


class Company(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)


class Project(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    id = models.IntegerField(primary_key=True, unique=True)
    project_name = models.CharField(max_length=200)
    project_number = models.CharField(max_length=200)
    acquisition_date = models.DateTimeField(blank=True, null=True)
    number_3l_code = models.CharField(max_length=200)
    project_deal_type_id = models.CharField(max_length=200)
    project_group_id = models.CharField(max_length=200)
    project_status_id = models.CharField(max_length=200)


class WTG(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    WTG_number = models.CharField(max_length=200)
    WTG_Type_id = models.CharField(max_length=200)
    Region_id = models.CharField(max_length=200)
    kW = models.IntegerField()
    hub = models.IntegerField()
    rotor = models.IntegerField()
    altitude = models.IntegerField(null=True)
    COD = models.DateTimeField()
    zip_code = models.IntegerField()
    WGS_84_north = models.DecimalField(max_digits=19, decimal_places=10)
    WGS_84_east = models.DecimalField(max_digits=19, decimal_places=10)
    gauss_krueger_zone = models.IntegerField()
    gauss_krueger_north = models.DecimalField(max_digits=19, decimal_places=10)
    gauss_krueger_east = models.DecimalField(max_digits=19, decimal_places=10)
    town_id = models.CharField(max_length=200)

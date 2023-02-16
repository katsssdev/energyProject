from django.urls import path, re_path

from . import views

urlpatterns = [
    path('projects/', views.ProjectsView.as_view()),
    re_path('projects/(?P<pk>[0-9]+)', views.ProjectsViewUpdateDelete.as_view()),
]
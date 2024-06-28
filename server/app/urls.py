from django.urls import path
from .views import TaskList, TaskDetail

urlpatterns = [
    path('', TaskList.as_view()),  # Маршрут для списка задач
    path('/create', TaskList.as_view()),  # Маршрут для создания задачи
    path('/<uuid:_id>/edit', TaskDetail.as_view()),  # Маршрут для редактирования задачи
    path('/<uuid:_id>', TaskDetail.as_view()),  # Маршрут для удаления задачи
]
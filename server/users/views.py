import logging

from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from .models import CustomUser

logging.basicConfig(level=logging.DEBUG)


class SignInWithPassword(APIView):
    def post(self, request):
        login = request.data.get('login')
        password = request.data.get('password')

        logger = logging.getLogger(__name__)

        try:
            user = CustomUser.objects.get(login=login)

            if password != user.password:
                logger.warning('Неправильные логин или пароль для пользователя %s', login)
                return Response({'error': 'Неправильные логин или пароль'}, status=400)

            return Response({'userId': user._id}, status=200)

        except ObjectDoesNotExist:
            logger.warning('Пользователь с логином %s не найден', login)
            return Response({'error': 'Неправильные логин или пароль'}, status=400)

        except Exception as e:
            logger.exception('Произошла ошибка: %s', str(e))
            return Response({'message': 'На сервере произошла ошибка. Попробуйте позже'}, status=500)
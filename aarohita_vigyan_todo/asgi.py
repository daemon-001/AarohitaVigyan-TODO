"""
ASGI config for aarohita_vigyan project.
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'aarohita_vigyan_todo.settings')

application = get_asgi_application()





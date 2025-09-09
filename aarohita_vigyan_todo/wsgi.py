"""
WSGI config for aarohita_vigyan project.
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'aarohita_vigyan_todo.settings')

application = get_wsgi_application()





from .common import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env['DJANGO_SECRET_KEY']


STATIC_URL = env['STATIC_URL']
STATIC_ROOT = env['STATIC_TMPDIR']

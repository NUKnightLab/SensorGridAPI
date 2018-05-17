from .common import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

SECRET_KEY = 'development'

STATIC_URL='/static/'
STATIC_ROOT=os.path.join(BASE_DIR, 'static/')

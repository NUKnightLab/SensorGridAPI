# SensorGridAPI
Web API and dashboard for SensorGrid

## API
To get the Django REST API set up:

`git clone https://github.com/NUKnightLab/SensorGridAPI.git`
```
git clone https://github.com/NUKnightLab/SensorGridAPI.git
cd SensorGridAPI
```
If you have just installed the project, run:
```
mkvirtualenv sgapienv
```
Or if you have already run it before run this to get into the virtualenv:
```
workon sgapienv
```
After you are in the correct virtualenv, run:
```
pip install -r requirements.txt
```
Now that you have your environment set up and up to date,
```
cd sensorgridapi
```
To create a basic database:
```
./manage.py makemigration <APPNAME>
./manage.py migrate
```
To start a local server and view the admin backend:
```
./manage.py runserver
```
To add an administrator to the site:
```
./manage.py createsuperuser
```
To work on Django in the command line:
```
./manage.py shell
```

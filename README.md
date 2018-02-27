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
## Dashboard
To launch the dashboard:
```
cd sensorgriddashboard
npm install
```
If the installation process runs successfully, you can start the dashboard by running:
```
npm start
```

# API endpoints
`/sensordata/?node_id=<INT>` - Returns an array of sensor data objects with the corresponding ID.

`/sensordata/created_at_lt=<EPOCH>` - Returns an array of sensor data objects created before the epoch timestamp inputted.

`/sensordata/created_at_gt=<EPOCH>` - Returns an array of sensor data objects created after the epoch timestamp inputted.

`/sensordata/?battery&node_id_include` - Returns an array of objects containing a node's ID and battery.

`/sensordata/?battery&node_id=<INT>` - Returns an array of objects containing the battery values of the specified node ID.

`/sensordata/?data&data_type&node_id=<INT>` - Returns an array of objects corresponding to the specified node ID with the value of each sensor's data point and SensorDataSerializer_timestamp corresponding data type.

`/sensordata/?data&data_type&node_id_include` - Returns an array of objects containing each node's ID, data value, and data type.


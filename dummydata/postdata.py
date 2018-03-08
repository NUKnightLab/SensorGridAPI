import json
import requests
import time
from random import randint

# note: pushed data up to 14
up_to = 0
# Tuesday, March 6, 11:20AM

# read in dummy data file created by makejson.js
data = json.load(open('data.json'))

# specify site url
site_url = 'https://sensorgridapi.knightlab.com/sensordata/'
# local server site: 'http://127.0.0.1:8000/sensordata/'
# production site: 'https://sensorgridapi.knightlab.com/sensordata/'

for i in range(up_to, len(data)):
	print('posting data ' + str(i))
	# posts data to whichever site is specified by the site_url
	r = requests.post(site_url, json=data[i])
	print(r)
	if (r.status_code == 400):
		break
	time.sleep(randint(0,1))

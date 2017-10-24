import flask
from flask import Flask, request
app = Flask(__name__)
import datetime
import pymongo
import os
import sys
from delorean import parse
from struct import *

MONGO_DB_URI = os.environ.get('MONGO_DB_URI', 'mongodb://localhost:27017/')
db = pymongo.MongoClient(MONGO_DB_URI).sensorgrid

PROTOCOL_VERSIONS = {
    '0.11': '<HHHHIHxxI10i'
}
PROTOCOL = PROTOCOL_VERSIONS['0.11']


@app.route('/')
def main():
    return 'Knight Lab SensorGrid'


def convert_mongo_id(record):
    record['record_id'] = str(record['_id'])
    del record['_id']
    return record


@app.route('/data', methods=['GET', 'POST'])
def data():
    if request.method == 'GET':
        query = {}
        limit = int(request.args.get('limit', 100))
        if 'node_id' in request.args:
            query['node_id'] = int(request.args['node_id'])
        if 'before' in request.args:
            before = parse(request.args['before']).datetime
            query['received_at'] = { '$lt': before }
        return flask.json.jsonify({
            'data': list(map(convert_mongo_id, db.data.find(query,
                limit=limit)\
                .sort('received_at', pymongo.DESCENDING)))
        })
    # we should be checking data length. See Flask docs:
    # http://werkzeug.pocoo.org/docs/0.11/wrappers/#werkzeug.wrappers.BaseRequest.get_data
    if request.json.get('ver') == 1: # json encoded message
        msg = request.json
        (ver, net, orig, msg_id, bat, ram, timestamp, data) = (
            msg['ver'], msg['net'],
            msg['orig'], msg['id'],
            msg['bat'], msg['ram'], msg['timestamp'],
            msg['data'])
    else: # raw struct message
        msg = request.get_data(cache=False)
        ver, net, orig, msg_id, bat_100, timestamp, \
            *data = unpack(PROTOCOL, msg)
        bat = bat_100 / 100.0
    sys.stdout.flush()
    record = {
        'version': ver,
        'network': net,
        'message_id': msg_id,
        'received_at': datetime.datetime.now(),
        'node_id': orig,
        'battery': bat,
        'ram': ram,
        'timestamp': timestamp,
        'created_at': datetime.datetime.fromtimestamp(timestamp),
        'data': [ int(i) for i in data ]
    }
    db.data.insert_one(record)
    return 'OK'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9022)

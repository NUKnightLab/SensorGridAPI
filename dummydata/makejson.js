var fs = require("fs")

function mkJson() {
  var sensordata = []
  var data_types = ['gas', 'pm10', 'pm2.5', 'temp', 'humidity']
  var node_id_lat = {1: 42.0556589, 2: 42.0413013, 3: 42.0507029, 4: 42.074439, 5: 42.0611052}
  var node_id_long = {1: -87.6831799, 2: -87.6800576, 3: -87.6741602, 4: -87.6842669, 5: -87.6765987}
  for (var mo = 0; mo < 12; mo++) {
    for (var day = 1; day <= 28; day++) {
      for (var hr = 0; hr < 24; hr++) {
        var battery = (Math.random() * 5).toFixed(2)
        var created_at = new Date(2017, mo, day, hr);
        var data_type = Math.floor((Math.random() * 4) + 1)
        var data = 0
        if (data_type == 0) {
          data = (Math.random() * 5).toFixed(2)
        }
        else if (data_type == 1) {
          data = (Math.random() * 10).toFixed(2)
        }
        else if (data_type == 2) {
          data = (Math.random() * 3).toFixed(2)
        }
        else if (data_type == 3) {
          data = (Math.random() * 90).toFixed(2)
        }
        else if (data_type == 4) {
          data = (Math.random() * 100).toFixed(2)
        }
        var message_id = Math.floor(Math.random() * 1000);
        var network = Math.floor(Math.random() * 7);
        var node_id = Math.floor(Math.random() * 5) + 1;
        var latitude = node_id_lat[node_id];
        var longitude = node_id_long[node_id]
        var ram = Math.floor(Math.random() * 10);
        var recieved_at = new Date(2017, mo, day, hr);
        var record_id = Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
        var timestamp = new Date(2017, mo, day, hr);
        var version = (Math.random() * 1).toFixed(2);
        sensordata.push({battery, created_at, data_type, data, message_id, network, node_id, latitude, longitude, ram,
                          recieved_at, record_id, timestamp, version})
      }
    }
  }
  console.log(sensordata)
  var stream = fs.createWriteStream('./data.json');
  stream.write(JSON.stringify(sensordata));
  stream.end;
}

mkJson()

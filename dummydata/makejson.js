var fs = require("fs")

days_in_month = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}

function mkJson() {
  var sensordata = []
  var data_types = ['gas', 'pm10', 'pm2.5', 'temp', 'humidity']
  var node_id_lat = {1: 42.0556589, 2: 42.0413013, 3: 42.0507029, 4: 42.074439, 5: 42.0611052}
  var node_id_long = {1: -87.6831799, 2: -87.6800576, 3: -87.6741602, 4: -87.6842669, 5: -87.6765987}
  for (var mo = 1; mo <= 12; mo++) {
    len_month = days_in_month[mo]
    for (var day = 1; day <= len_month; day++) {
      for (var hr = 0; hr < 24; hr++) {
        var battery = (Math.random() * 5).toFixed(2)
        var created_at = new Date(2017, mo, day, hr);
        var data_type = Math.floor((Math.random() * 4) + 1);
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
          if (mo == 1 || mo == 2 || mo == 12) {
            data = (Math.random() * 40).toFixed(2)
          }
          else if (mo == 3 || mo == 11) {
            data = (30 + (Math.random() * 20)).toFixed(2)
          }
          else if (mo == 4 || mo == 10) {
            data = (40 + (Math.random() * 25)).toFixed(2)
          }
          else if (mo == 5 || mo == 6) {
            data = (50 + (Math.random() * 30)).toFixed(2)
          }
          else if (mo == 7 || mo == 8) {
            data = (65 + (Math.random() * 25)).toFixed(2)
          }
          else if (mo == 9) {
            data = (55 + (Math.random() * 20)).toFixed(2)
          }
        }
        else if (data_type == 4) {
          data = (60 + (Math.random() * 25)).toFixed(2)
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
        var version = (Math.floor(Math.random() * 10));
        sensordata.push({battery, created_at, data_type: data_types[data_type], data, message_id, network, node_id, latitude, longitude, ram,
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

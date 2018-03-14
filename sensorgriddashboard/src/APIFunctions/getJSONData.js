
import 'whatwg-fetch'
// this function makes a call to the /data api and returns the JSON object
export default function () {
  return new Promise((resolve, reject) => {
    fetch('https://sensorgridapi.knightlab.com/sensordata/')
      .then(function (response) {
        console.log(response)
        return response.json()
      }).then(function (json) {
        console.log('parsed json', json)
        resolve(json)
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  })
}
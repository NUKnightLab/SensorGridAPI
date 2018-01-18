
import fetch from 'whatwg-fetch'

export default function () {
  return new Promise((resolve, reject) => {
    fetch('http://54.152.62.254:9022/data')
      .then(function (response) {
        console.log('check')
        return resolve(response.json())
      }).then(function (json) {
        console.log('parsed json', json)
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  })

}
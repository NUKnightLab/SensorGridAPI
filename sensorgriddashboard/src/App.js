import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getJSON from './APIFunctions/getJSONData.js'
import BarChart from './BarChart'
import { XYFrame, OrdinalFrame } from "semiotic"
import testJSON from "./testData.json"
import realTestData from './realTestData';

import HomePage from './components/HomePage';




//Currently this component is the whole application, it has a few boilerplate
//things. When the component mounts it makes a call to the API and displays the first
//battery datapoint
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: realTestData.line,
      bar: realTestData.bar

    };
  }
  componentWillMount() {
    // console.log(realTestJSON)
    //this is called when the componenet mounts
    //google component lifecycle for more info
    // getJSON()
    // .then( (res) => {
    //   this.setState({
    //     data: res.data
    //   })
    // })
  }

  convertTime(dateArr) {
    var convertedDataArr = []
    var obj = {}

    dateArr.forEach((item) => {

      var splitTime = item.time.split(" ");
      console.log('splitarry', splitTime)
      item.time = splitTime[1]

    })
    return dateArr;
  }
  render() {

    console.log('converted', this.convertTime(this.state.line))
    //Render is the most important function of a react component
    //This is where are describing what the component is displaying
    // var batteryLife = this.state.data[0].battery;

    const variousAnnotations = [
      { orient: 'left', label: 'Battery Life' },
      { orient: "bottom", label: "Time" }
    ]
    const test = testJSON.barTest
    console.log(test)

    const axis = {
      orient: "left",
      tickFormat: d => d,
      label: {
        name: "Data1 Value",
        position: { anchor: "middle" },
        locationDistance: 40
      }
    }

    // const data = [{ "funnelKey": "#00a2ce", "stepName": "visits", "stepValue": 1000 }, { "funnelKey": "#00a2ce", "stepName": "registration", "stepValue": 900 }, { "funnelKey": "#00a2ce", "stepName": "mop", "stepValue": 500 }]



    return (
      
      <HomePage />
    );
  }
}

export default App;

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
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     {/*This takes the batteryLife variable and displays it  */}
      //   </p>
      //   <div className='dashboard'>
      //     <XYFrame
      //       className='linegraph'
      //       size={[400, 400]}
      //       lines={this.state}
      //       xAccessor="time"
      //       yAccessor="battery"
      //       yExtent={[0, 4]}
      //       lineDataAccessor="line"
      //       showLinePoints={true}
      //       title={"Title of Graph"}
      //       axes={variousAnnotations}
      //       lineStyle={d => ({ stroke: 'red', fill: 'red' })}
      //     />
      //     <OrdinalFrame
      //       className='barGraph'
      //       size={[400, 400]}
      //       data={this.state.bar}
      //       axis={axis}
      //       projection={'vertical'}
      //       type={'bar'}
      //
      //
      //
      //       oLabel={true}
      //       oPadding={20}
      //       oAccessor={d => "Sensor " + d.sensor}
      //       rAccessor={'data1'}
      //
      //       margin={{ left: 55, top: 0, bottom: 50, right: 0 }}
      //
      //     />
      //   </div>
      //   {/* <OrdinalFrame
      //     size={[400, 600]}
      //     data={test}
      //     oAccessor={"sensor"}
      //     rAccessor={"battery"}
      //     style={{ fill: "#00a2ce", stroke: "white" }}
      //     type={"bar"}
      //     oLabel={true}
      //   /> */}
      //   <div>
      //   </div>
      // </div>
      <HomePage />
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getJSON from './APIFunctions/getJSONData.js'
import BarChart from './BarChart'
import { XYFrame, OrdinalFrame } from "semiotic"
import testJSON from "./testData.json"
import realTestData from './realTestData';
import { scaleTime } from 'd3-scale'





//Currently this component is the whole application, it has a few boilerplate
//things. When the component mounts it makes a call to the API and displays the first
//battery datapoint
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayData: realTestData,
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
    var obj = {}

    dateArr.forEach((item) => {

      var splitTime = item.time.split(" ");
      console.log('splitarry', splitTime)
      item.time = splitTime[1]

    })
    return dateArr;
  }
  render() {

    //Render is the most important function of a react component
    //This is where are describing what the component is displaying
    // var batteryLife = this.state.data[0].battery;

  //   const displayData = [
  //     { id: 'linedata-1', color: '#00a2ce', 
  //        data: [ 
  //             { sales: 500, daysSinceRelease: 1 }, 
  //             { sales: 700, daysSinceRelease: 2 }, 
  //             { sales: 0, daysSinceRelease: 3 }, 
  //             { sales: 0, daysSinceRelease: 4 }, 
  //             { sales: 200, daysSinceRelease: 5 }, 
  //             { sales: 300, daysSinceRelease: 6 }, 
  //             { sales: 500, daysSinceRelease: 7 } 
  //            ] 
  //     },
  //     { id: 'linedata-2', color: '#FFa2ce', 
  //     data: [ 
  //          { sales: 500, daysSinceRelease: 1 }, 
  //          { sales: 600, daysSinceRelease: 2 }, 
  //          { sales: 100, daysSinceRelease: 3 }, 
  //          { sales: 100, daysSinceRelease: 4 }, 
  //          { sales: 200, daysSinceRelease: 5 }, 
  //          { sales: 200, daysSinceRelease: 6 }, 
  //          { sales: 500, daysSinceRelease: 7 } 
  //         ] 
  //  }
  // ]
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {/*This takes the batteryLife variable and displays it  */}
        </p>
        <div className='dashboard'>
        <BarChart displayData={this.state.displayData}></BarChart>
        </div>
        {/* <OrdinalFrame
          size={[400, 600]}
          data={test}
          oAccessor={"sensor"}
          rAccessor={"battery"}
          style={{ fill: "#00a2ce", stroke: "white" }}
          type={"bar"}
          oLabel={true}
        /> */}
        <div>
        </div>
      </div>
    );
  }
}

export default App;

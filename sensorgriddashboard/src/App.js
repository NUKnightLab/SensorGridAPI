import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getJSON from './APIFunctions/getJSONData.js'
import BarChart from './BarChart'
import { XYFrame, OrdinalFrame } from "semiotic"
import testJSON from "./testData.json"


//Currently this component is the whole application, it has a few boilerplate
//things. When the component mounts it makes a call to the API and displays the first
//battery datapoint
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['test']
    };
  }
  componentWillMount() {
    console.log(testJSON)
    //this is called when the componenet mounts
    //google component lifecycle for more info
    // getJSON()
    // .then( (res) => {
    //   this.setState({
    //     data: res.data
    //   })
    // })
  }
  render() {
    //Render is the most important function of a react component
    //This is where are describing what the component is displaying
    var batteryLife = this.state.data[0].battery;
    const data = [
      { id: 'linedata-1', color: '#00a2ce', 
         data: [ 
              { sales: 500, daysSinceRelease: 1 }, 
              { sales: 700, daysSinceRelease: 2 }, 
              { sales: 0, daysSinceRelease: 3 }, 
              { sales: 0, daysSinceRelease: 4 }, 
              { sales: 200, daysSinceRelease: 5 }, 
              { sales: 300, daysSinceRelease: 6 }, 
              { sales: 500, daysSinceRelease: 7 } 
             ] 
      }
  ]
  const variousAnnotations = [
    { orient: 'left', label: 'Battery Life' },
    {orient: "bottom", label:"Time"}
]
const barChartData = [
  { user: "Jason", tweets: 10, retweets: 5, favorites: 15 },
  { user: "Susie", tweets: 5, retweets: 100, favorites: 100 },
  { user: "Matt", tweets: 20, retweets: 25, favorites: 50 },
  { user: "Betty", tweets: 30, retweets: 20, favorites: 10 }
];      
const test = testJSON.barTest
console.log(test)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {/*This takes the batteryLife variable and displays it  */}
        </p>
        <XYFrame
            size={[500,500]}
            lines={testJSON}
            xAccessor="test"
            xExtent={ [0,7] }
            yAccessor="battery"
            yExtent={ [0,10] }
            lineDataAccessor="lineTest"
            showLinePoints = {true}
            title={"Title of Graph"}
            axes={variousAnnotations}
            lineStyle={d => ({ stroke: 'red', fill: 'red' })}
          />
          <OrdinalFrame
            size={[400, 600]}
            data={test}
            oAccessor={"sensor"}
            rAccessor={"battery"}
            style={{ fill: "#00a2ce", stroke: "white" }}
            type={"bar"}
            oLabel={true}
          />
        <div>
      </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getJSON from './APIFunctions/getJSONData.js'
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
    //this is called when the componenet mounts
    //google component lifecycle for more info
    getJSON()
    .then( (res) => {
      this.setState({
        data: res.data
      })
    })
  }
  render() {
    //Render is the most important function of a react component
    //This is where are describing what the component is displaying
    var batteryLife = this.state.data[0].battery;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {/*This takes the batteryLife variable and displays it  */}
          {batteryLife}
        </p>  
      </div>
    );
  }
}

export default App;

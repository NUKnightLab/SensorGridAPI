import React, { Component } from 'react'
import './HomePage.css'
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

class HomePage extends Component {
   constructor(props){
      super(props)

   }

render() {
      return (
        <div>
          <AppBar title="Dashboard" />
          <h2>Gas</h2>
          <Divider />
          <h2>Dust</h2>
          <Divider />
        </div>
      )
   }
}

export default HomePage

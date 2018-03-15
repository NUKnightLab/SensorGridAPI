import React, { Component } from 'react'
import './HomePage.css'
import NavBar from './NavBar'
import Battery from './Battery'
import MyGoogleMap from './MyGoogleMap'
import TimeSeries from './TimeSeries'
import Average from './Average'
import TabContainer from './TabContainer'
import SummaryBar from './SummaryBar'
import realTestData from '../TestData/testData';
import getData from '../APIFunctions/getJSONData'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      displayData: realTestData,
      batteryArr: [4, 4, 4, 4, 4]
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentWillMount() {
    getData()
      .then((data) => {
        this.parseData(data)

      })
  }
  parseData(data) {
    var batteryArr = []
    var batteryIndex = 1;
    for (var i = 0; i < data.length; i++) {
      if (data[i].node_id === batteryIndex) {
        batteryArr.push(data[i].battery)
        batteryIndex++
      }
      if (batteryIndex === 6) break;
    }
    var particleData = [
      {
        id: '1',
        color: 'blue',
        data: []
      },
      {
        id: '2',
        color: 'green',
        data: []
      },
      {
        id: '3',
        color: 'red',
        data: []
      },
      {
        id: '4',
        color: 'yellow',
        data: []
      },
      {
        id: '5',
        color: 'orange',
        data: []
      },
    ]
    var batteryData = [
      {
        id: '1',
        color: 'blue',
        data: []
      },
      {
        id: '2',
        color: 'green',
        data: []
      },
      {
        id: '3',
        color: 'red',
        data: []
      },
      {
        id: '4',
        color: 'yellow',
        data: []
      },
      {
        id: '5',
        color: 'orange',
        data: []
      },
    ]
    var test_day = 1;

    for (var j = 0; j < data.length; j++) {
      var id = data[j].node_id
      // var date = data[j].timestamp.split("T")[0].split("-")
      // var time = data[j].timestamp.split("T")[1].split(":")
      // var day = this.getRandomInt(12) + 1
        if (particleData[id - 1].data.length < 20) {
          particleData[id - 1].data.push({
            gasSensor: data[j].data,
            created_at: new Date(data[j].timestamp),

          })
        }
        if (batteryData[id - 1].data.length < 200) {
          batteryData[id - 1].data.push({
            created_at: new Date(data[j].timestamp),
            battery: data[i].battery

          })
        }
        test_day++
    }

    this.setState({
      batteryArr: batteryArr,
      particleData: particleData,
      batteryData: batteryData
    })


  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  render() {
    return (
      <div>
        <Navbar color="black" light expand="md">
          <NavbarBrand href="/">SensorGrid Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/NUKnightLab/SensorGridAPI">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Battery data={this.state.batteryArr} />
            </Col>
            <Col>
              <TabContainer data={this.state}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HomePage;

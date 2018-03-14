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
      batteryArr: [4,4,4,4,4]
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentWillMount() {
    getData()
    .then((data)=> {
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
    this.setState({
      batteryArr: batteryArr
    })
    //parse data and set it to state
    
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
                <NavLink href="https://sensorgridapi.knightlab.com/sensordata/">API</NavLink>
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

              <Battery data={this.state.batteryArr}/>

            </Col>
            <Col>
              <TabContainer />

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HomePage;

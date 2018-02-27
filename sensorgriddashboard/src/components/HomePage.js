import React, { Component } from 'react'
import './HomePage.css'
import NavBar from './NavBar'
import Battery from './Battery'
import MyGoogleMap from './MyGoogleMap'
import TimeSeries from './TimeSeries'
import realTestData from '../TestData/testData';

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
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
          <Battery className = "Battery" />
          <NavBar className = "Navigation"/>
          <TimeSeries displayData={this.state.displayData}/>
          <MyGoogleMap />
      </div>
    )
  }
}

export default HomePage;
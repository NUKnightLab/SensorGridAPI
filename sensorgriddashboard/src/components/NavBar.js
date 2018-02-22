import React, { Component } from 'react'
import './NavBar.css'
import Battery from './Battery'
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
} from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    
    // this.jumpToSection = this.jumpToSection.bind(this);
    this.state = {
      
    };
  }
  

  jumpToSection(x){
   
    window.scrollTo(0, x);
    
  }

  render() {
    return (
      <div>
        <div>
          <ButtonGroup vertical id="navbar">
            
            <Button onClick={this.jumpToSection.bind(this, 1000)}>Particle</Button>
            <Button onClick={this.jumpToSection.bind(this, 2000)}>Gas</Button>
            <Button onClick={this.jumpToSection.bind(this, 3000)}>Temperature</Button>
            <Button onClick={this.jumpToSection.bind(this, 4000)}>Humidity</Button>
          </ButtonGroup>


        </div>
      </div>
    )
  }
}

export default NavBar

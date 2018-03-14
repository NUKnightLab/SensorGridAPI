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
          

        </div>
      </div>
    )
  }
}

export default NavBar

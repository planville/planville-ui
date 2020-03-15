import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl,Button } from 'react-bootstrap';

function Header() {
  return (
    
    <div className="Header">
        <Nav.Link style={{color: "white" }} href="#" >PlanVille</Nav.Link>
        <nav class="Navbar__Items Navbar__Items--right">
          <Nav.Link style={{color: "white"}} href="#devices">Devices</Nav.Link>
          <Nav.Link style={{color: "white"}} href="#plans">Plans</Nav.Link> 
        </nav>  
    </div>
  );
  }
export default Header;
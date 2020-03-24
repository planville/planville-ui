import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap';

function Header() {
  return (
    
    <div className="Header">
      
        <Navbar.Brand style={{color: "white"}} href="#">PlanVille</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link style={{color: "white"}} href="#devices">Devices</Nav.Link>
          <Nav.Link style={{color: "white"}} href="#plans">Plans</Nav.Link>
          
        </Nav>
        
      
    </div>
  );
  }
export default Header;
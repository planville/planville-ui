import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap';

function Header() {
  return (
    
    <div className="Header">
        <Nav.Link style={{color: "white" }} href="/home" >PlanVille</Nav.Link>
        <nav class="Navbar__Items Navbar__Items--right">
          <Nav.Link style={{color: "white"}} href="/about">About Us</Nav.Link>
          <Nav.Link style={{color: "white"}} href="/contact">Contact Us</Nav.Link> 
        </nav>  
    </div>
  );
  }
export default Header;
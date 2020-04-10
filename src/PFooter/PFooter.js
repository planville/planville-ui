import React from 'react';
import './PFooter.css';
import {Link} from 'react-router-dom';


const PFooter = () => {
    return (
    <div className="PFooter">
      <Link to="/home">Home</Link> &nbsp; 
      <Link to="/about">About us</Link> &nbsp; 
      <Link to="/contact">Contact us</Link> &nbsp; 
      <Link to="/providers">Providers</Link> &nbsp;
      <Link to="/filter">Filter</Link> &nbsp;
      <div>&nbsp;</div>
    </div>
    );
  }

export default PFooter;

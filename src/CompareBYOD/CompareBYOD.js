import React from 'react';
import './CompareBYOD.css';
import {Form, FormControl, Button } from "react-bootstrap";
import {

  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";
import Filter from '../Filter/Filter';

class CompareBYOD extends React.Component{

  handleButtonClicked = ev => {
    console.log("Event")
    console.log(ev)
    console.log(ev.target.value)
    this.props.history.push({
      pathname: "/filter",
      state: {
        message:  ev.target.value
      }
    });
   
  };

render () {
  return (

 
    ["Contract Based","BRING YOUR OWN DEVICE"].map(buttonId => (
      // Pass a parameter in 'value' attribute
      <button className="CompareBYOD"
        key={buttonId}
        value={buttonId}
        onClick={(event) => this.handleButtonClicked(event)}
      >
      {buttonId} &nbsp;&nbsp;
      </button>

    )
    
   
  ));
}
}

export default withRouter(CompareBYOD);

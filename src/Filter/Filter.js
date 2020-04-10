import React from 'react';
import './Filter.css';

class Filter extends React.Component {
  render () {
    return (
  
      <div>
        <h3>Filter value: {this.props.location.state.searchText}</h3>
       </div>
  
    );
  }
  }

export default Filter;

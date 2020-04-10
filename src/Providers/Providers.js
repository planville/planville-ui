import React from 'react';
import './Providers.css';


class Providers extends React.Component {
  render() {
          
          return (
              <div className="centered">
                  The data from parent is: {this.props.location.state.searchText}
              </div>
          );
      }
  }

export default Providers;

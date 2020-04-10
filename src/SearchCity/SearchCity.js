import React from 'react';
import './SearchCity.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, withRouter } from "react-router-dom";
import {Form, FormControl, Button } from "react-bootstrap";
import Filter from '../Filter/Filter';

class SearchCity extends React.Component {
  state = {
    searchText: ""
  };

  handleRoute = route => () => {
    this.props.history.push({ pathname: route });
  };

  handleSearchInput = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  handleSearchSubmit = () => {
    if (this.state.searchText) {
      this.props.history.push({
        pathname: "/filter",
        state: {
          searchText: this.state.searchText
        }
      });
    } else {
      alert("Please enter some search text!");
    }
  };
  render() {
    return (
      <>
          <Form inline className="centered">
            <FormControl
              onChange={this.handleSearchInput}
              value={this.state.searchText}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button onClick={this.handleSearchSubmit} variant="outline-info" className="design">
              Search
            </Button>
          </Form>
           <Switch>
           <Route exact path="/filter" component={Filter} />
         </Switch>
          </>
    );
  }
}
export default withRouter(SearchCity);

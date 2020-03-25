import React from 'react';
import './SearchCity.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl,Button } from 'react-bootstrap';

function SearchCity() {
  return (
    <div className="Content">
      <Form inline className="centered">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" className="button">Search City</Button>
        </Form>
    </div>
  );
}

export default SearchCity;

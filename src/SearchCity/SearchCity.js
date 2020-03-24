import React from 'react';
import './SearchCity.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl,Button } from 'react-bootstrap';

function SearchCity() {
  return (
    <div className="Content">
      <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{alignItems: 'center'}} />
          <Button variant="outline-info">Search By City</Button>
        </Form>
    </div>
  );
}

export default SearchCity;

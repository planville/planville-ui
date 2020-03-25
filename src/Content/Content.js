import React from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl,Button } from 'react-bootstrap';

function Content() {
  return (
    <div className="Content">
      <Form inline className="centered">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" className="button">Search City</Button>
        </Form>
    </div>
  );
}

export default Content;

import React from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl,Button } from 'react-bootstrap';

function Content() {
  return (
    <div className="Content">
      <Form inline>
        
          <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{alignItems: 'center'}} />
          <Button variant="outline-info">Search By City</Button>
        </Form>
    </div>
  );
}

export default Content;

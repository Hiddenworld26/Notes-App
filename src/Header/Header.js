import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    
          
    <Navbar expand="lg"bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Notes Zipper</Navbar.Brand>
      <Nav className='m-auto'>

      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      </Nav>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav >
          <Nav.Link href="/My Notes">My Notes</Nav.Link>
          
          <NavDropdown title="Shruti Verma" id="basic-nav-dropdown">
            <NavDropdown.Item href="/My Profile">My Profile</NavDropdown.Item>
            
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
   
    
    
  )
}

export default Header
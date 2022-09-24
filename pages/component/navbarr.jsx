import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navbarr = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home">News Today</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className='me-auto'>
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="/">Exit</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navbarr;
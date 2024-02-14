import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../Assets/logo.avif';
import './MyNavbar.css'

function MyNavbar () {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}  
            alt="Logo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='list1' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='list1' as={Link} to="/men">Men</Nav.Link>
            <Nav.Link className='list1'as={Link} to="/women">Women</Nav.Link>
            <Nav.Link  className='list1'as={Link} to="/kids">Kids</Nav.Link>
          </Nav>
          <Nav className='cart_div'>
            <Nav.Link className='list2' as={Link} to="/login"><i class="fa-solid fa-user"></i></Nav.Link>
            <Nav.Link  as={Link} to="/cart"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar
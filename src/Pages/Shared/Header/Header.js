import { signOut } from 'firebase/auth';
import React from 'react';
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth);
  }
    return (
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="40" alt="" />
      E<small >asyTech..</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
           
            {
              user && <>
              <Nav.Link href="addService">AddService</Nav.Link>
              <Nav.Link href="manage">ManageService</Nav.Link>
              
              </>
            }
            
          </Nav>
          <Nav >
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {
              user ?
              <button onClick={handleSignOut} className='bg-dark border-0 text-white' >Sign out</button>
              :
              <Nav.Link as={Link} to="login">
             Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;
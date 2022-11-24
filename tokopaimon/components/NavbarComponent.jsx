import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" className="d-flex flex-column" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
        <Container fluid style={{ fontFamily: 'serif' }}>
          <ul to="/" style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: '24px' }} className="navbar-brand">
            The Parentings
          </ul>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <ul className="nav-link" to="/">
                Home
              </ul>
              <ul className="nav-link" to="/artikel">
                Artikel
              </ul>
              <ul className="nav-link" to="/forumDiskusi">
                Forum Diskusi
              </ul>
              <ul className="nav-link" to="/profile">
                Profile
              </ul>
              <Button variant="light" className="ms-3 buttonNav">
                Masuk
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
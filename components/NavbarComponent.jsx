import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const NavbarComponent = () => {
  return (
    <>
      <Navbar className="bg-dark d-flex flex-column border-bottom">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-light fs-2 fw-bold">
            TOKOPaimon
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            
            {/* saat belum login */}
            <Button variant="dark" className="rounded-pill">
              Login
            </Button>
            {/* Jika sudah login */}
            {/* <Navbar.Text className='text-light'>
              Signed in as: <a href="#login" className='text-light'>Mark Otto</a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

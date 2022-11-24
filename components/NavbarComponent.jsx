import { Container, Nav, NavLink } from 'react-bootstrap';
import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const kategoris = ['baju', 'elektronik', 'peralatan rumah', 'gaming'];

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="bg-secondary shadow-lg d-flex flex-column">
        <Container fluid className="border-bottom">
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

        <Container className="py-2">
          <Nav>
            {kategoris.map((kategori, idx) => (
              <NavLink>{kategori}</NavLink>
            ))}
          </Nav>

          <Button variant="outline-light" onClick={handleShow} size="sm">
            Filters
          </Button>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Filters</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-around">
                <Button>Highest Price</Button>
                <Button>Lower Price</Button>
              </div>
            </Modal.Body>
          </Modal>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

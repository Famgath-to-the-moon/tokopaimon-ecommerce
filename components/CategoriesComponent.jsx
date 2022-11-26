import { Container, Nav, NavLink } from 'react-bootstrap';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../styles/CategoriesComponent.module.css';

const kategoris = ['baju', 'elektronik', 'peralatan rumah', 'gaming'];

const CategoriesComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='bg-light shadow-lg'>
      <Container className="d-flex py-2 justify-content-between">
        <Nav>
          {kategoris.map((kategori, idx) => (
            <NavLink key={idx} className={`${styles.cusNavlink}`} >{kategori}</NavLink>
          ))}
        </Nav>

        <Button variant="outline-dark rounded-pill" onClick={handleShow}>
          Sorting
        </Button>
        
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-dark">Sorting</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-around">
              <Button>Highest Price</Button>
              <Button>Lower Price</Button>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default CategoriesComponent;

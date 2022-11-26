import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/FooterComponent.module.css';

const FooterComponent = () => {
  return (
    <footer className={`bg-dark ${styles.footer} d-flex align-items-center`}>
      <Container className="d-flex justify-content-between">
        <Row>
          <Col className='text-light fs-6'>WireShark 2.0</Col>
        </Row>
        <Row>
          <Col className='text-light'>Famgath 2022</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;

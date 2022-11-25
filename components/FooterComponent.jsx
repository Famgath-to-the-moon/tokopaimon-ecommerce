import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/FooterComponent.module.css';

const FooterComponent = () => {
  return (
    <footer className={`bg-secondary ${styles.footer} d-flex align-items-center`}>
      <Container className="d-flex justify-content-between">
        <Row>
          <Col className='fs-6'>WireShark 2.0</Col>
        </Row>
        <Row>
          <Col>Famgeth 2022</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;

import CardItem from './CardItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardList() {
  return (
    <Row xs={1} sm={2} md={3} lg={5} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col>
          <CardItem/>
        </Col>
      ))}
    </Row>
  );
}

export default CardList;
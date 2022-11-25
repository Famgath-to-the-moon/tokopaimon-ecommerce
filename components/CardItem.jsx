import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import uwih from '../public/uwih.png';
import styles from '../styles/CardItem.module.css'

function CardItem({title}) {
  return (
    <>
      <Card className={`${styles.shadow} ${styles.lightGrey} rounded-3`}>
        <Card.Img className='rounded-3 ' as={Image} variant="top" src={uwih} fluid={true} alt="Card image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>
            Rp50.000
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <Button variant="primary">Beli</Button>{' '}
            <Button variant="outline-primary">Detail</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardItem;
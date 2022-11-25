import { useRouter } from 'next/router';
import { Container, Nav } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';

const detailProduct = () => {
  const router = useRouter();
  const productId = router.query.productid;

  return (
    <>
      <Container>
        <h1>coba</h1>
      </Container>
    </>
  );
};

export default detailProduct;

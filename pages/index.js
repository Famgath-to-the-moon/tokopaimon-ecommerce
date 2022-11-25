import { Container } from 'react-bootstrap';
import PaginatedCardList from '../components/CardList';
import CategoriesComponent from '../components/CategoriesComponent';

export default function Home() {
  return (
    <>
      <CategoriesComponent />
      <Container>
        <PaginatedCardList itemsPerPage={10} />
      </Container>
    </>
  );
}

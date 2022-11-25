import Head from 'next/head';
import Image from 'next/image';
import PaginatedCardList from '../components/CardList';
import styles from '../styles/Home.module.css';
import NavbarComponent from '../components/NavbarComponent';

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div className={styles.container}>
          <PaginatedCardList itemsPerPage={10} />
        <main className={styles.main}>
        </main>
      </div>
    </>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import PaginatedCardList from '../components/CardList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
          <PaginatedCardList itemsPerPage={10} />
        <main className={styles.main}>
        </main>
      </div>
    </>
  );
}

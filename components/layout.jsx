import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <main className={styles.main}>{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;

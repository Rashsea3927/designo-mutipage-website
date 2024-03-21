import Logo from '@/assets/shared/logo-dark.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
// import MobileMenuIcon from './MobileMenuIcon';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-menu']}>
        <h1>
          <Link href='/'>
            <Image src={Logo} width={202} height={27} alt='Designo Logo' />
          </Link>
        </h1>
        <Navbar />
        {/* Mobile Nav */}
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;

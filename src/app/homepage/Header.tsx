import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Nav from '../components/Nav';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <Link href={`/homepage`}>Naija Memes</Link>
      </div>
      <Nav/>
    </div>
  );
};

export default Header;

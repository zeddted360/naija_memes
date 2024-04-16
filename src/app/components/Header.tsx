import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Nav from '../ui/Nav';
import Sidebar from '../ui/sidebar';
import ShowBar from '../ui/ShowBar';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <Link
          className={`text-2xl font-bold ${styles.siteName}`}
          href={`/naija_memes/home`}
        >
          Naija Memes
        </Link>
        <br />
        <hr />
        <ShowBar />
        <Nav />
      </div>
    </div>
  );
};

export default Header;

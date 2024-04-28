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
        <div className='flex flex-col gap-2 p-2'>
          <Link href='/naija_memes/signup'>Sign Up</Link>
          <Link href='/naija_memes/login'>Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

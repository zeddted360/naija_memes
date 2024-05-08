import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Nav from '../ui/Nav';
import Sidebar from '../ui/sidebar';
import ShowBar from '../ui/ShowBar';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <Link className={styles.siteName} href={`/naija_memes/home`}>
          <Image
            alt='memesLogo'
            className='rounded-full'
            width={50}
            height={50}
            src='/images/memesLogo.jpeg'
          />
          <h1 className='`text-3xl font-bold'>Naija Memes</h1>
        </Link>
        <br />
        <hr />
        <ShowBar />
        <Nav />
        <div className=' p-2 hidden md:flex flex-col gap-2 '>
          <Link href='/naija_memes/signup'>Sign Up</Link>
          <Link href='/naija_memes/login'>Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav.module.css';

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={styles.navLinks}>
      <nav>
        <Link
          className={pathname === '/homepage' ? 'active' : 'noneActive'}
          href='/homepage'
        >
          Home
        </Link>
        <Link
          className={pathname === '/news' ? 'active' : 'noneActive'}
          href='/news'
        >
          News
        </Link>
        <Link
          className={pathname === '/about' ? 'active' : 'noneActive'}
          href='/about'
        >
          About
        </Link>
        <Link
          className={pathname === '/contact' ? 'active' : 'noneActive'}
          href='contact'
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Nav;

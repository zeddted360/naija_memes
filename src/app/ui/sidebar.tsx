'use client';
import React, { useState } from 'react';
import styles from './sidebar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ActionType, StateType } from '@/context/ThemeContext';

const Sidebar = ({
  state,
  dispatch,
  setShowBar,
}: {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
  setShowBar: React.Dispatch<boolean>;
}) => {
  const pathname = usePathname();
  const [anime, setAnime] = useState<boolean>(false);
  const inner = state.theme === '#21222a' ? '#f9f9f9' : '#21222a';
  const ball = inner === '#21222a' ? '#f9f9f9' : '#21222a';

  const handleChangeTheme = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnime((prevState: boolean) => !prevState);
    dispatch({ type: 'TURN_DARK_LIGHT' });
  };
  return (
    <div className={styles.sideBar}>
      <nav
        onClick={() => {
          setShowBar(false);
        }}
      >
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
      <div className={styles.changeTheme}>
        <i>Light</i>
        <div
          onClick={handleChangeTheme}
          style={{
            backgroundColor: inner,
          }}
          className={styles.inner}
        >
          <div
            style={{
              backgroundColor: ball,
            }}
            className={` ${styles.ball} ${anime && styles.animate}`}
          ></div>
        </div>
        <i>Dark</i>
      </div>
    </div>
  );
};

export default Sidebar;

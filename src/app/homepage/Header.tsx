'use client';
import React, { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Nav from '../components/Nav';
import Sidebar from '../components/sidebar';
import { useTheme } from '@/hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faEnvelope,
  // faDroplet,
  faBars,
  // faHouse,
  // faNewspaper,
  // faFootball,
  // faUser,
  // faPen,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { state, dispatch } = useTheme();

  const [showBar, setShowBar] = useState<boolean>(true);
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <Link className='text-2xl font-bold' href={`/homepage`}>
          Naija Memes
        </Link>
        <br />
        <hr />
        <div>
          <button
            className='mb-2 md:hidden'
            onClick={() => {
              setShowBar((prevState: boolean) => !prevState);
            }}
          >
            {showBar ? (
              <span
                className='text-2xl  font-bold'
              >
                &times;
              </span>
            ) : (
              <FontAwesomeIcon
                style={{ width: 30, height: 30 }}
                icon={faBars}
              />
            )}
          </button>
          {showBar && (
            <Sidebar
              state={state}
              dispatch={dispatch}
              setShowBar={setShowBar}
            />
          )}
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;

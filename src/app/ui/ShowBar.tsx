'use client';
import React, { useState } from 'react';
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
import Sidebar from './sidebar';
import { useTheme } from '@/hooks/useTheme';

const ShowBar = () => {
  const { state, dispatch } = useTheme();
  const [showBar, setShowBar] = useState(false);
  return (
    <div>
      <button
        className='mb-2 md:hidden'
        onClick={() => {
          setShowBar((prevState: boolean) => !prevState);
        }}
      >
        {showBar ? (
          <span className='text-2xl  font-bold'>&times;</span>
        ) : (
          <FontAwesomeIcon style={{ width: 30, height: 30 }} icon={faBars} />
        )}
      </button>
      {showBar && (
        <Sidebar state={state} dispatch={dispatch} setShowBar={setShowBar} />
      )}
    </div>
  );
};

export default ShowBar;

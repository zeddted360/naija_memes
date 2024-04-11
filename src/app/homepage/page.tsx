'use client';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Parent from './parent';
import styles from './homepage.module.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { useTheme } from '@/hooks/useTheme';

const Homepage = () => {
  const { state, dispatch } = useTheme();
  return (
    <div
      style={{
        backgroundColor: state.theme && state.theme,
        color: state.color && state.color,
      }}
      className={styles.homepage}
    >
      <ThemeProvider>
        <Parent>
          <div className={styles.main}>
            <Header />
            <Body />
          </div>
          <Footer />
        </Parent>
      </ThemeProvider>
    </div>
  );
};

export default Homepage;

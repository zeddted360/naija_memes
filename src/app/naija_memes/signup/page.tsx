import React from 'react';
import styles from './signup.module.css';
import Link from 'next/link';
import SignUpUi from '@/app/ui/SignUp';

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <h2>Sign Up</h2>
      <SignUpUi styles={styles} />
      <div className={styles.notRegistered}>
        <p> Already Registered ?</p>{' '}
        <Link href='/naija_memes/login'>Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './landing.module.css';
import Link from 'next/link';

export default function Landing() {
  return (
    <main className={styles.main}>
      {/* <FontAwesomeIcon style={{width:100,height:100}} icon={faEnvelope} /> */}
      <div className={styles.landingHead}>Naija_Memes</div>
      <div className={styles.landingBody}>
        <div className={styles.welcomeMessage}>
          <h1>
            <b>Welcome</b> to Naija_memes just laugh and forget your sorrows
          </h1>
        </div>
        <div className={styles.linksContainer}>
          <Link href={`/signup`}>Join</Link>
          <Link href='/login'>login</Link>
          <Link href='/homepage'>home</Link>
        </div>
      </div>
      <div className={styles.landingFooter}>&copy; Naija_Memes 2024</div>
    </main>
  );
}

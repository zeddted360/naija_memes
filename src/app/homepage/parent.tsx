import { ReactNode } from 'react';
import styles from './parent.module.css';

const Parent = ({ children }: { children: ReactNode }) => {

  return (<div className={styles.parent}>
    {children}
    </div>);
};

export default Parent;

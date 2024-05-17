import React from 'react';
import styles from '@/app/ui/create.module.css';
import CreatePost from '@/app/ui/CreatePost';


export const metadata = {
  title: 'Add Post',
  description: 'Naija_memes Create Post',
};


export default function Create() {
  return (
    <div className={styles.create_container}>
      <CreatePost styles={styles} />
    </div>
  );
}

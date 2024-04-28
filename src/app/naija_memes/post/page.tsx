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
          <h2 className='text-xl text-center font-bold'>Add a Post</h2>
          <CreatePost styles ={styles}/>
    </div>
  );
}

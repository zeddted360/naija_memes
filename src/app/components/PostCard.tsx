import React from 'react';
import { PostType } from '../types/types';
import styles from './postcard.module.css';

const PostCard = ({ id, title, authorId, content }: PostType) => {
  return (
    <div className={styles.postCard}>
      <h3>{title}</h3>
      <p>{content?.slice(0,50)}...</p>
    </div>
  );
};

export default PostCard;

import React from 'react';
import styles from './home.module.css';
import PostCard from '@/app/components/PostCard';
import { PostType } from '@/app/types/types';

const getPosts = async () => {
  const res = await fetch(`http://localhost:5050/posts`, { cache: 'no-store' });
  return res.json();
};

const Home = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.home}>
      <h2 className='text-2xl'>Dashboard</h2>
      {posts.map((post: PostType) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Home;

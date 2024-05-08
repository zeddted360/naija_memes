import React, { Suspense } from 'react';
import styles from './home.module.css';
import PostCard from '@/app/components/PostCard';
import Link from 'next/link';
import Loading from '@/app/components/Loading';
import Search from '@/app/components/Search';
import { IPost } from '@/app/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const getPosts = async (url: String) => {
  const res = await fetch(`${url}`, {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
};

const Home = async ({ searchParams }: { searchParams: { query: String } }) => {
  const { query } = searchParams;
  let href: String;
  query
    ? (href = `http://localhost:3000/api/post/getPosts?${query}`)
    : (href = 'http://localhost:3000/api/post/getPosts');

  const posts = await getPosts(href);
  let words: string[] = [posts?.words] || [''];
  
  

  return (
    <>
      <div className={styles.homeHead}>
        <h2 className='text-2xl'>Dashboard</h2>
        <Search />
        <Link
          className='flex items-center jusutify-center px-1'
          href='/naija_memes/post'
        >
          {' '}
          <FontAwesomeIcon
            className='mr-1'
            style={{ width: 20, height: 20 }}
            icon={faPen}
          />
          <i>Post</i>
        </Link>
      </div>
      <div className={styles.home}>
        {posts &&
          posts.message.map((post: IPost) => (
            <Suspense key={`${post._id}`} fallback={<Loading />}>
              <Link
                className={styles.postList}
                href={`/naija_memes/${post._id}`}
              >
                <PostCard {...post} words={words} />
              </Link>
            </Suspense>
          ))}
      </div>
    </>
  );
};

export default Home;

import React, { Suspense } from 'react';
import styles from './postcard.module.css';
import Loading from './Loading';
import { IPost } from '@/app/types/types';

interface IWord extends IPost {
  words: string[];
}

const PostCard = ({ _id, title, authorId, content, words }: IWord) => {
  const markWords = (text: string) => {
    const pattern = new RegExp(words.join(' '), 'gim');
    return text.replace(
      pattern,
      (match) => `<mark class='rounded-md'>${match}</mark>`
    );
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.postCard}>
        <h3
          className='text-lg mb-2 font-bold'
          dangerouslySetInnerHTML={{ __html: markWords(title) }}
        />
        <p
          className='p-2'
          dangerouslySetInnerHTML={{
            __html: markWords(content?.slice(0, 20) + '...'),
          }}
        />
      </div>
    </Suspense>
  );
};

export default PostCard;

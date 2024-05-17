import React, { Suspense } from 'react';
import styles from './postcard.module.css';
import Loading from './Loading';
import { IPost } from '@/app/types/types';
import Image from 'next/image';
import { getImageMimeType } from '@/utils/getImageMimeType';

interface IWord extends IPost {
  words: string[];
}



const PostCard = async ({
  _id,
  title,
  authorId,
  content,
  media,
  words,
}: IWord) => {
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
        {media?.length !=0  &&
        <div  className={styles.mediaContainer}>
          {
            media?.length !== 0 &&
            media?.map( async (item) => {
              // const fileType = await getImageMimeType(item)
              return (
                <div key={item} className={styles?.imgCont}>
                  <Image
                    alt='logo'
                    className={styles.img}
                    src='/images/memesLogo.jpeg'fill />
                  {/* {fileType?.startsWith('image') ? (
 <Image
  className={styles.img}
                      alt='media'
                      src={item}
                      fil
                    />
                   
                  ) : (
                    <video
                      src={item}
                      controls
                    />
                  )} */}
                </div>
              );
            })}
        </div>

          }
        <div className={styles?.detailsPage}>
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
      </div>
    </Suspense>
  );
};

export default PostCard;

import User from '@/app/components/User';
import React, { Suspense } from 'react';
import Image from 'next/image';
import { getImageMimeType } from '@/utils/getImageMimeType';
import { timeAgo } from '@/utils/timeAgo';
import AuthorLoading from '@/app/ui/AuthorLoading';

const fetchPost = async (_id: number) => {
  const res = await fetch(`http://localhost:3000/api/post/getPost/${_id}`, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
};

export default async function Post({ params }: { params: { _id: number } }) {
  const { _id } = params;
  const post = await fetchPost(_id);
  
  return (
    <div className='w-full mx-auto p-8 bg-white shadow-md rounded-lg'>
      <div className='mb-2 mx-auto my-auto p-2 border rounded-lg flex justify-between'>
        <Suspense fallback={<div>{<AuthorLoading />}</div>}>
          <User authorId={post.message.authorId} />
        </Suspense>
        <i>{timeAgo(new Date(), new Date(post.message.createdAt))}</i>
      </div>
      {post.media &&
        post.media?.length !== 0 &&
        post.media.map(async (item: any) => {
          const fileType = await getImageMimeType(item);
          return fileType?.startsWith('image') ? (
            <Image width={150} height={150} alt='img' src={item} />
          ) : (
            <video width={150} height={150} src={item} controls />
          );
        })}
      <h1 className='text-xl font-bold mb-4'>{post.message.title}</h1>
      <p className='text-gray-600 p-2 mb-4'>{post.message.content}</p>
    </div>
  );
}

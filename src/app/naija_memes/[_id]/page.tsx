import User from '@/app/components/User';
import React, { Suspense } from 'react';

const fetchPost = async (_id: number) => {
  const res = await fetch(`http://localhost:3000/api/post/getPost?_id=${_id}`, {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
};

export default async function Post({ params }: { params: { _id: number } }) {
  const { _id } = params;
  const post = await fetchPost(_id);
  
  return (
    <div className='w-full mx-auto p-8 bg-white shadow-md rounded-lg'>
      <div className='mb-2 mx-auto my-auto p-2 border rounded-lg inline-block'>
        <Suspense fallback={<div></div>}>
        <User authorId={post.message.authorId} />
        </Suspense>
      </div>
      <h1 className='text-3xl font-bold mb-4'>{post.message.title}</h1>
      <p className='text-gray-600 mb-4'>{post.message.content}</p>
    </div>
  );
}

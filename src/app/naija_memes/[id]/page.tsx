import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faEnvelope,
  // faDroplet,
  //   faBars,
  // faHouse,
  // faNewspaper,
  // faFootball,
  faUser,
  // faPen,
} from '@fortawesome/free-solid-svg-icons';
const fetchPost = async (id: number) => {
  const res = await fetch(`http://localhost:5050/posts/${id}`);

  return res.json();
};

const fetchAuthor = async (authorId: number) => {
  const res = await fetch(`http://localhost:5050/authors/${authorId}`);

  return res.json();
};
const Post = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const post = await fetchPost(id);
  let author;
  if (post) {
    const Author = await fetchAuthor(post.authorId);
    author = Author;
  }
  return (
    <div className='max-w-2xl mx-auto mt-8 p-8 bg-white shadow-md rounded-lg'>
      <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
      <p className='text-gray-600 mb-4'>{post.content}</p>
      <div className='flex items-center'>
        <span className='text-gray-700'>
          {' '}
          <FontAwesomeIcon
            style={{ width: 30, height: 30 }}
            icon={faUser}
          />{' '}
          <i> {author.name}</i>
        </span>
      </div>
    </div>
  );
};

export default Post;

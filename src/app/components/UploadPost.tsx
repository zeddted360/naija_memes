'use client';
import React, { useState } from 'react';
import { IPost } from '../types/types';

const UploadPost = ({
  post,
  setPost,
}: {
  post: IPost;
  setPost: React.Dispatch<React.SetStateAction<IPost>>;
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setPost((prevState: IPost) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className='flex flex-col'>
      <div>
        <input
          name='title'
          type='text'
          placeholder='Title'
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          rows={10}
          cols={30}
          name='content'
          placeholder='Content'
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UploadPost;

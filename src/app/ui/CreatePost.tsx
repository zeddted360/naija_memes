'use client';
import React, { useState } from 'react';
import { IPost } from '../types/types';

export default function CreatePost({ styles }: { styles: any }) {
  const [post, setPost] = useState<IPost>({
    title: '',
    content: '',
    authorId: '66256e4a4b5e69b650614b03',
  });
  const [files, setFiles] = useState<File[] | FileList[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setPost((prevState: IPost) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);
    formData.append('authorId', `${post.authorId}`);
    try {
      setLoading(true);
      const res = await fetch(`/api/post/create`, {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        setLoading(false);
        throw new Error('Something went wrong');
      }
      const data = await res.json();
      window.alert(data.message);
      form.reset();
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  };
  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        <div className='blog-title'>
          <input
            name='title'
            type='text'
            placeholder='Title'
            onChange={handleChange}
          />
        </div>
        <div className='blog-content'>
          <textarea
            name='content'
            rows={10}
            cols={30}
            placeholder='Content'
            onChange={handleChange}
          />
        </div>
        <div className='blog-title'>
          <label htmlFor='postFile'>File</label>
          <input
            type='file'
            name='file'
            multiple
            id='postFile'
            accept='.png, .mp4, .jpeg, .jpg, ,webp, .3gp'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const files: FileList = e.target.files as FileList;
              setFiles([files]);
            }}
            className=''
          />
        </div>
        <button className='btn'>{loading ? 'Creating...' : 'Create'}</button>
      </form>
    </div>
  );
}

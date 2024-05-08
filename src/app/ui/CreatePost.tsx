'use client';
import React, { useState } from 'react';
import { IMetaData, IPost } from '../types/types';
import { useRouter } from 'next/navigation';
import UploadPost from '../components/UploadPost';
import UploadFile from '../components/UploadFile';
import { uploadMedia } from '@/utils/uploadMedia';

export const metadata: IMetaData = {
  title: 'Create Post',
};
export default function CreatePost({ styles }: { styles: any }) {
  const router = useRouter();
  const [post, setPost] = useState<IPost>({
    title: '',
    content: '',
    authorId: '66256e4a4b5e69b650614b03',
  });
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('content', post.content);
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
      if (selectedFiles) {
        let mediaUrls:string[] = [];
        setLoading(true);
        uploadMedia(selectedFiles, mediaUrls, data.message?._id);
       
      }
      window.alert('post added');
      setLoading(false);
      form.reset();
      router.push('/naija_memes/home');
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  };
  
  return (
    <div className={styles.create_container}>
      <form onSubmit={handleSubmit}>
        <UploadPost post={post} setPost={setPost} />
        <UploadFile
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
        <button>{ loading ? 'Uploading...' : 'upload'}</button>
      </form>
    </div>
  );
}
   
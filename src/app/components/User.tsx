import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const fetchAuthor = async (authorId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `http://localhost:3000/api/user/getUser?author=${authorId}`
  );

  return res.json();
};

const User = async ({ authorId }: { authorId: string }) => {
  const author = await fetchAuthor(authorId);
  const { profilePic, username } = author.message;

  return (
    <span className='text-gray-700 flex gap-1 justify-center items-center'>
      {profilePic ? (
        <Image
          alt='profile pic'
          width={30}
          height={30}
          className='rounded-full'
          src={`data:image/png;base64,${Buffer.from(profilePic).toString(
            'base64'
          )}`}
        />
      ) : (
        <FontAwesomeIcon style={{ width: 30, height: 30 }} icon={faUser} />
      )}
      {author && <i> {username}</i>}
    </span>
  );
};
export default User;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const fetchAuthor = async (authorId: string) => {
  console.log('waiting');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('waited fro a minute');
  const res = await fetch(
    `http://localhost:3000/api/user/getUser?author=${authorId}`
  );

  return res.json();
};

const User = async ({ authorId }: { authorId: any }) => {
  const author = await fetchAuthor(authorId);
  return (
    <span className='text-gray-700'>
      <FontAwesomeIcon style={{ width: 30, height: 30 }} icon={faUser} />
      {author && <i> {author.message.username}</i>}
    </span>
  );
};
export default User;

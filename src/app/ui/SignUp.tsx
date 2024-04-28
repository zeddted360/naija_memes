'use client';
import React, { useState, useRef } from 'react';
type UserType = {
  username: String;
  email: String;
  password: String;
  confirmPassword: String;
};
type ProfilePicType = {
  profilePic: File;
};
const SignUpUi = ({ styles }: { styles: any }) => {
  // local states
  const [user, setUser] = useState<UserType>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [file, setFile] = useState<File | null>( null);
  const [showPass, setShowPass] = useState(false);
  const [loading,setLoading] = useState<Boolean>(false)
  //local states ends

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type } = e.target;
    setUser((prevState: UserType) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const showPassword = () => {
    setShowPass((prevState: Boolean) => !prevState);
  };

  const handleSignUp = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);
    try{
      setLoading(true);
      const res = await fetch(`/api/user`, {
        method:'POST',
        body:formData
      });
      if(!res.ok){
      setLoading(false);
        throw new Error('Something went wrong');
      }
      const data = await res.json();
      window.alert(data.message);
    setLoading(false);
    }catch(error:any)  {
    setLoading(false)
      console.log(error.message)
    }
  }
  return (
    <div className={styles.signUp}>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            required
            type='text'
            onChange={handleChange}
            placeholder='Username'
            name='username'
            id='username'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>

          <input
            required
            type='email'
            onChange={handleChange}
            placeholder='email'
            name='email'
            id='email'
          />
        </div>
        <div>
          {' '}
          <label htmlFor='password'>Password</label>
          <input
            required
            type={!showPass ? 'password' : 'text'}
            onChange={handleChange}
            placeholder='*********'
            name='password'
            id='password'
          />
          <br />
          <span className='flex gap-1 items-center justify-center'>
            <input
              type='checkbox'
              onChange={showPassword}
              className='w-4 h-4'
              checked={showPass}
              id='showPass'
            />
            <label htmlFor='showPass'>Show Password</label>
          </span>
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            required
            type='password'
            onChange={handleChange}
            placeholder='Re-enter Password'
            name='confirmPassword'
            id='confirmPassword'
          />
        </div>
        <div>
          <label htmlFor='profilePic'>Image</label>
          <input
            type='file'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0] as File;
              setFile(file);
            }}
            id='profilePic'
            name='profilePic'
          />
        </div>
        <button>{loading ? 'Signing Up...' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default SignUpUi;

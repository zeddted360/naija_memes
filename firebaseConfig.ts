import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: 'AIzaSyBAyN1UfZt_p6HAajmmXf9rRjfM0YRCm_Q',
  authDomain: 'naija-memes-63822.firebaseapp.com',
  projectId: 'naija-memes-63822',
  storageBucket: 'naija-memes-63822.appspot.com',
  messagingSenderId: '677790346204',
  appId: '1:677790346204:web:e2ab7e4708a49d06c9bd19',
  measurementId: 'G-FMCQVXH7EY',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
const firebaseConfig = {
  apiKey: 'AIzaSyAe0AGkX_uvQqv0Rspp9IoPrD7wwBQ1mOc',
  authDomain: 'sandesh-web-app.firebaseapp.com',
  projectId: 'sandesh-web-app',
  storageBucket: 'sandesh-web-app.appspot.com',
  messagingSenderId: '1044919447939',
  appId: '1:1044919447939:web:a9e4ccbf9f94b3792ec6b6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

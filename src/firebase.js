import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDx56Z0DniPtQEI9i91bN6Q08bMnHy5UM0",
  authDomain: "fire-3dbfb.firebaseapp.com",
  projectId: "fire-3dbfb",
  storageBucket: "fire-3dbfb.appspot.com",
  messagingSenderId: "868322462276",
  appId: "1:868322462276:web:ca6db2a53fd34a0cec8a11",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


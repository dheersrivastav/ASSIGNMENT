import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

//remove credentials

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


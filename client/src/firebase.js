import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-480e2.firebaseapp.com",
  projectId: "mern-blog-480e2",
  storageBucket: "mern-blog-480e2.appspot.com",
  messagingSenderId: "974719089516",
  appId: "1:974719089516:web:aaed04b7f50e9101295149"
};
export const app = initializeApp(firebaseConfig);
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCgSu6SgXGEeoxg9eQZ5hu9llVPbVX2avE",
  authDomain: "task1-1dd03.firebaseapp.com",
  projectId: "task1-1dd03",
  storageBucket: "task1-1dd03.appspot.com",
  messagingSenderId: "261240375837",
  appId: "1:261240375837:web:82897b15fb330b49ae94f4",
  measurementId: "G-EP8KP10FJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth, RecaptchaVerifier, signInWithPhoneNumber };

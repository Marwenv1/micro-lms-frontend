import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_-oVWEuybo5Xp1-RoNkzgQa-qudwVwaU",
    authDomain: "lms1-87c86.firebaseapp.com",
    projectId: "lms1-87c86",
    storageBucket: "lms1-87c86.appspot.com",
    messagingSenderId: "779599493994",
    appId: "1:779599493994:web:8fba42266e24feed43c313"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

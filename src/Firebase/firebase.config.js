// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDK_jqtGeFm5qyDBxqPZOMjQ0X8cUUdiuY",
      authDomain: "user-email-password-auth-f0bd1.firebaseapp.com",
      projectId: "user-email-password-auth-f0bd1",
      storageBucket: "user-email-password-auth-f0bd1.appspot.com",
      messagingSenderId: "211053041070",
      appId: "1:211053041070:web:3b99ba34bed6ab1b15643f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;
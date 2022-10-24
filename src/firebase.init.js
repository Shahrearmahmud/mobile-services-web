// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_yG5U4CfAN-5wDDETPLfU0oh4BgE7Q-0",
  authDomain: "mobile-phone-services.firebaseapp.com",
  projectId: "mobile-phone-services",
  storageBucket: "mobile-phone-services.appspot.com",
  messagingSenderId: "373736760750",
  appId: "1:373736760750:web:e66cee8d840a96d790943f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth ;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0lIDGBqdIQ8m8HpnTqYhfsrsRGlG1tvY",
  authDomain: "assignment-12-client-d5b00.firebaseapp.com",
  projectId: "assignment-12-client-d5b00",
  storageBucket: "assignment-12-client-d5b00.appspot.com",
  messagingSenderId: "561255429983",
  appId: "1:561255429983:web:52b63076faf765868628ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
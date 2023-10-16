// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDncUjaJdh7gOx7zZw-6JNstLS3EyQOehU",
  authDomain: "coffee-store-cbece.firebaseapp.com",
  projectId: "coffee-store-cbece",
  storageBucket: "coffee-store-cbece.appspot.com",
  messagingSenderId: "127321400416",
  appId: "1:127321400416:web:5b431e401c77a9b0ae8f05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
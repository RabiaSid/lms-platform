// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg2IcPu3LkPGgIs_YuY529PkgnmPEvMkQ",
  authDomain: "lms-platform-df1c0.firebaseapp.com",
  databaseURL: "https://lms-platform-df1c0-default-rtdb.firebaseio.com",
  projectId: "lms-platform-df1c0",
  storageBucket: "lms-platform-df1c0.appspot.com",
  messagingSenderId: "970045467039",
  appId: "1:970045467039:web:f95bf6fdb1bcbc7ebf75aa",
  measurementId: "G-WRE0DR1KGN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const imgDB = getStorage(app)
const analytics = getAnalytics(app);

// export {imgDB};
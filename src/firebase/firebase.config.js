// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('environment variablem tamim', import.meta.env.VITE_PASS);


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCWEXPyyOBC2uDXu1jIN5su021dZbdqCvA",
//   authDomain: "flavor-lav-a10.firebaseapp.com",
//   projectId: "flavor-lav-a10",
//   storageBucket: "flavor-lav-a10.appspot.com",
//   messagingSenderId: "905929573699",
//   appId: "1:905929573699:web:7071d99ebdda683ee15bf6"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
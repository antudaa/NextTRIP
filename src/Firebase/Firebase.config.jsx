import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;





// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAAnJgdsqbwa9rlg-g_Elus-lQ2NXlYzxE",
//   authDomain: "next-trip-4681f.firebaseapp.com",
//   projectId: "next-trip-4681f",
//   storageBucket: "next-trip-4681f.appspot.com",
//   messagingSenderId: "912815994552",
//   appId: "1:912815994552:web:975da712eb9777bfeea64d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;




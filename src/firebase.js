// E:/test/.Office/jani na/my-react-app/src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyD9QqtLUH910GITHZPLWA7FDzXEm-OXv9I",
    authDomain: "janina-bf7e5.firebaseapp.com",
    projectId: "janina-bf7e5",
    storageBucket: "janina-bf7e5.firebasestorage.app",
    messagingSenderId: "219833641066",
    appId: "1:219833641066:web:96d4c691ce556eadf5c213",
    measurementId: "G-CNMB68GMHL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

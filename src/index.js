import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCNvpwbj7fkkcbpyWOV3dRq6XMkuzElZ2U",
authDomain: "nexa-sphere.firebaseapp.com",
projectId: "nexa-sphere",
storageBucket: "nexa-sphere.appspot.com",
messagingSenderId: "869655293022",
appId: "1:869655293022:web:15b047acbf241fa538d8cf",
measurementId: "G-YZBJKMECRQ"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const db = getFirestore(app);

//Initialization Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

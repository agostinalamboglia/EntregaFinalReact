import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJMMcnXw7KztCU07jDxphY0wYO72pvV3E",
  authDomain: "entregafinalreact-5da22.firebaseapp.com",
  projectId: "entregafinalreact-5da22",
  storageBucket: "entregafinalreact-5da22.appspot.com",
  messagingSenderId: "748256451349",
  appId: "1:748256451349:web:2135275352734def38a71c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from './firebase/app';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: "AIzaSyDhUH2stq0gq0kZIGSZXHL1bUHLg8OD8hc",
  authDomain: "reactpizzeria.firebaseapp.com",
  projectId: "reactpizzeria",
  storageBucket: "reactpizzeria.appspot.com",
  messagingSenderId: "351598623356",
  appId: "1:351598623356:web:8b7e3257720b815e7367f9"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FireApp />
  </React.StrictMode>
);


reportWebVitals();

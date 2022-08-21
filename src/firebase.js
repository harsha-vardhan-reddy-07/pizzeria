import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDhUH2stq0gq0kZIGSZXHL1bUHLg8OD8hc",
  authDomain: "reactpizzeria.firebaseapp.com",
  projectId: "reactpizzeria",
  storageBucket: "reactpizzeria.appspot.com",
  messagingSenderId: "351598623356",
  appId: "1:351598623356:web:8b7e3257720b815e7367f9"
};


export const FireApp = initializeApp(firebaseConfig);
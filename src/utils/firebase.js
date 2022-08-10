import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  // apiKey: "AIzaSyCnTw3rNbaqzJjFHyybH1Wm3w4IB9jipVY",
  // authDomain: "contact-9b505.firebaseapp.com",
  // databaseURL: "https://contact-9b505-default-rtdb.firebaseio.com",
  // projectId: "contact-9b505",
  // storageBucket: "contact-9b505.appspot.com",
  // messagingSenderId: "94621485470",
  // appId: "1:94621485470:web:749ccda3e0fe686fb42e8f",
  // measurementId: "G-3DNMJYGYHE",
};


const firebase = initializeApp(firebaseConfig);
export default firebase;




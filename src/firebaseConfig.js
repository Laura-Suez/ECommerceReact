import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd4OqXWJ8tV2AzBdBCCtbglICmtPVEPLQ",
  authDomain: "coder-react-ecommerce-a8b2e.firebaseapp.com",
  projectId: "coder-react-ecommerce-a8b2e",
  storageBucket: "coder-react-ecommerce-a8b2e.appspot.com",
  appId: "1:1007717035010:web:5874907346764823b1cb1b",
  messagingSenderId: "1007717035010",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

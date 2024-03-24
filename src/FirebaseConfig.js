import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.vite_apiKey,
  authDomain: import.meta.vite_authDomain,
  projectId: "coder-react-ecommerce-a8b2e",
  storageBucket: import.meta.vite_storageBucket,
  messagingSenderId: import.meta.vite_messagingSenderId,
  appId: import.meta.vite_appId,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

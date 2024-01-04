import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAOd8g0u0S-Dq-z8aexM-m8kfktxDmIUcA",
  authDomain: "evaluacionjc-63fb2.firebaseapp.com",
  projectId: "evaluacionjc-63fb2",
  storageBucket: "evaluacionjc-63fb2.appspot.com",
  messagingSenderId: "887484178256",
  appId: "1:887484178256:web:e1f10c29de8120c2e71655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
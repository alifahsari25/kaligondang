import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-6MirTlcXVlJyYUmz2RBGTwwj_E6Ixco",
  authDomain: "bing-3f6a6.firebaseapp.com",
  databaseURL: "https://bing-3f6a6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bing-3f6a6",
  storageBucket: "bing-3f6a6.firebasestorage.app",
  messagingSenderId: "804642705867",
  appId: "1:804642705867:web:29834cb86798728ce6664e",
  measurementId: "G-G5V9FZG7BT"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };

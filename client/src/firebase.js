import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSaq729Fcax2sCKaieiL1o5wE9qYy6mIs",
  authDomain: "fooddeliveryapp154.firebaseapp.com",
  databaseURL: "https://fooddeliveryapp154-default-rtdb.firebaseio.com",
  projectId: "fooddeliveryapp154",
  storageBucket: "fooddeliveryapp154.appspot.com",
  messagingSenderId: "463417095744",
  appId: "1:463417095744:web:38a377531cb6574aef51a5",
  measurementId: "G-BBJ4M9MBH7",
};

// const app = initializeApp(firebaseConfig);
// export const authentication = getAuth(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app, "gs://fooddeliveryapp154.appspot.com");
// export default storage;
// export { app, firestore };
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app, "gs://fooddeliveryapp154.appspot.com");
export const db = getFirestore(app);
export const auth = getAuth(app);
export const authentication = getAuth(app);
export { app, firestore, storage };

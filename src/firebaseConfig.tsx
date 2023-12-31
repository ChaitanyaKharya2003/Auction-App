import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const db = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);

export const logOut = async () => {
  console.log("logging out...");
  const auth = getAuth();
  await signOut(auth);
};


// {
// "Version": "2012-10-17",
// "Statement": [
// {
// "Effect": "Allow",
// "Principal": {
// "Service": "eks.amazonaws.com"
// },
// "Action": "sts:AssumeRole"
// }
// ]
// }









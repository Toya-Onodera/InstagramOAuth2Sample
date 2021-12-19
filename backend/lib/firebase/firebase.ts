import { initializeApp } from "firebase/app";
import admin from "firebase-admin";
import serviceAccount from "../../config/firebaseAdminConfig";
import firebaseConfig from "../../config/firebaseConfig";

export const firebaseApp = initializeApp(firebaseConfig);
export const { auth, credential, database } = admin;

console.log(process.env.FIREBASE_DB_URL);

export const firebaseAdmin = () => {
  return admin.initializeApp({
    credential: credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DB_URL,
  });
};

import { initializeApp } from "firebase/app";
import admin from "firebase-admin";
import serviceAccount from "../../config/firebaseAdminConfig";
import firebaseConfig from "../../config/firebaseConfig";

export const firebaseApp = initializeApp(firebaseConfig);
export const { auth, credential, database } = admin;

export const firebaseAdmin = admin.initializeApp({
  credential: credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}-default-rtdb.firebaseio.com/`,
});

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

import { EXPO_API_KEY, EXPO_AUTH_DOMAIN, EXPO_PROJECT_ID, EXPO_STORAGE_BUCKET, EXPO_MESSAGING_SENDER_ID, EXPO_APP_ID, EXPO_MEASUREMENT_ID } from "@env";

const firebaseConfig = {
  apiKey: EXPO_API_KEY,
  authDomain: EXPO_AUTH_DOMAIN,
  projectId: EXPO_PROJECT_ID,
  storageBucket: EXPO_STORAGE_BUCKET,
  messagingSenderId: EXPO_MESSAGING_SENDER_ID,
  appId: EXPO_APP_ID,
  measurementId: EXPO_MEASUREMENT_ID
};

export const firebase_app = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase_app);
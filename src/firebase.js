// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB5f8oDBPL_E2GgwrnONEyeDLV15C_s48",
  authDomain: "urnextconnection.firebaseapp.com",
  projectId: "urnextconnection",
  storageBucket: "urnextconnection.appspot.com",
  messagingSenderId: "156998819479",
  appId: "1:156998819479:web:758ec08cd847b7eecc53d2",
  measurementId: "G-FV2PTEZ09E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
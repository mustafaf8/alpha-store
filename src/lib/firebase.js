import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4cUldncCqqZaxKxIo1hHjKJV4LBNUynk",
  authDomain: "alpha-dbd25.firebaseapp.com",
  projectId: "alpha-dbd25",
  storageBucket: "alpha-dbd25.firebasestorage.app",
  messagingSenderId: "115206027411",
  appId: "1:115206027411:web:87873795fc80e0f69bf566",
  measurementId: "G-5J2CGY8LZ4",
};

const app = initializeApp(firebaseConfig);

let analytics = null;
if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) analytics = getAnalytics(app);
    })
    .catch(() => {
      analytics = null;
    });
}

export { app, analytics };

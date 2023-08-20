import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAK1Nn25tS-nVF9gMYWIUhUAkPVJ48Do9E",
    authDomain: "linkedin-clone-yt-c1721.firebaseapp.com",
    projectId: "linkedin-clone-yt-c1721",
    storageBucket: "linkedin-clone-yt-c1721.appspot.com",
    messagingSenderId: "392897419252",
    appId: "1:392897419252:web:447db203e98b9716804ba1"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { db, auth };


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBg85sQramadXnUaoZ_oXGKdYVc7ylGGVI",
    authDomain: "metaverse-1.firebaseapp.com",
    projectId: "metaverse-1",
    storageBucket: "metaverse-1.appspot.com",
    messagingSenderId: "65426224873",
    appId: "1:65426224873:web:dcd942961c5889d9076278"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app);


export {
    auth,
    db,
}
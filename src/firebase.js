import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
// import "firebase/database"
// import "firebase/auth"
// import "firebase/storage"
const firebaseApp = initializeApp ({
    apiKey: "AIzaSyA_x-8MpCpfW9-XbIIhuegOSufuE4-odE4",
    authDomain: "instagram-clone-7b2c0.firebaseapp.com",
    projectId: "instagram-clone-7b2c0",
    storageBucket: "instagram-clone-7b2c0.appspot.com",
    messagingSenderId: "254385209502",
    appId: "1:254385209502:web:2453aa32a894d99ca73b8f",
    measurementId: "G-2HQ34XVNM5"
});

const db = getFirestore()
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage };
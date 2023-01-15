import {initializeApp} from "firebase/app";
import { GoogleAuthProvider,getAuth,signInWithPopup,signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC6E5wceHf9_GK1FtgEmCFWdodA2jWbEn8",
    authDomain: "clone-f397c.firebaseapp.com",
    projectId: "clone-f397c",
    storageBucket: "clone-f397c.appspot.com",
    messagingSenderId: "269857522580",
    appId: "1:269857522580:web:5c451e02309d48e93a4581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider =new GoogleAuthProvider()

provider.setCustomParameters({
    prompt:'select_account'
})

export const signInWithGoogle =async()=>await signInWithPopup(auth,provider);

export const signOutFn =async()=>await signOut(auth);
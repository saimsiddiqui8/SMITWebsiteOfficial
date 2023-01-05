import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgKh_hCQOzQjjc978dvhFuudjK-zI3LHU",
    authDomain: "saylaniwelfaremasstraining.firebaseapp.com",
    databaseURL: "https://saylaniwelfaremasstraining-default-rtdb.firebaseio.com",
    projectId: "saylaniwelfaremasstraining",
    storageBucket: "saylaniwelfaremasstraining.appspot.com",
    messagingSenderId: "42216739714",
    appId: "1:42216739714:web:0cfff04907c77a7f4df59b",
    measurementId: "G-ZWKQ3MD226"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

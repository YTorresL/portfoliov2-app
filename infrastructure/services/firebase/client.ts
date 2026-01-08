import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHJ3ctBQwzSghetL_VU_LHMJyro4UuSRk",
  authDomain: "portfolio-6dd62.firebaseapp.com",
  projectId: "portfolio-6dd62",
  storageBucket: "portfolio-6dd62.appspot.com",
  messagingSenderId: "697837663818",
  appId: "1:697837663818:web:649f512ee5a7bef407d8b3",
  measurementId: "G-NEQWBB7Z7T",
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
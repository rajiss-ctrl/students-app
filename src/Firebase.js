// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
// import { useState, useEffect } from "react";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5XdjWFbKSmMUY0EmFFpybH-ES14SzxEA",
  authDomain: "students-dashboard-ea757.firebaseapp.com",
  projectId: "students-dashboard-ea757",
  storageBucket: "students-dashboard-ea757.appspot.com",
  messagingSenderId: "908443916640",
  appId: "1:908443916640:web:228e085fc399b82891a605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth();
export const auth = getAuth(app);
export default app

// export function logout(email,password){
//     return signOut(auth);
// }
// export function Register(email,password){
//     return createUserWithEmailAndPassword(auth,email,password);
// }
// export function login(email,password){
//     return signInWithEmailAndPassword(auth,email,password);
// }

// // get current student

// export function useAuth(){
//   const [currentStudent, setCurrentStudent] = useState()
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth,user =>setCurrentStudent(user))
//     return unsub;
//   }, [])
  
//   return currentStudent
// }
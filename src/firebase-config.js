import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEy8ytKybVLyDq01YseflrQ2W1z04M7pw",
    authDomain: "record-collection-6297a.firebaseapp.com",
    projectId: "record-collection-6297a",
    storageBucket: "record-collection-6297a.appspot.com",
    messagingSenderId: "489793218906",
    appId: "1:489793218906:web:7cbbaf2939d8c6dee12b63",
    measurementId: "G-MEPVZ8CER8"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore();


export {app, db }
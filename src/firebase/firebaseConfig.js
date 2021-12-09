import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBYS8iSp-nfI89Y09nhWDjyr9NZtkyq-SI",
  authDomain: "clothes-7ba87.firebaseapp.com",
  projectId: "clothes-7ba87",
  storageBucket: "clothes-7ba87.appspot.com",
  messagingSenderId: "994789592973",
  appId: "1:994789592973:web:14aac951799159911f77c4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export{
    app,
    
    db
}
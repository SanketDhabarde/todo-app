import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseApp= firebase.initializeApp({
      apiKey: "AIzaSyC1CK3OwpA-1YgNjBmcm9K80LbcFc1fvkw",
      authDomain: "todo-app-7ff4e.firebaseapp.com",
      databaseURL: "https://todo-app-7ff4e-default-rtdb.firebaseio.com",
      projectId: "todo-app-7ff4e",
      storageBucket: "todo-app-7ff4e.appspot.com",
      messagingSenderId: "1062296040798",
      appId: "1:1062296040798:web:7716b00ad838b9fbbe4bcf",
      measurementId: "G-T5C0T9EYM6"
});

const db= firebaseApp.firestore();

export default db;
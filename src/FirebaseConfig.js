import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importa Firestore
import { getAuth } from "firebase/auth"; // Importa Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAJb-b9QXIaXJHLN501TC4T3saFgHfP-UA",
  authDomain: "crudzki-85362.firebaseapp.com",
  projectId: "crudzki-85362",
  storageBucket: "crudzki-85362.firebasestorage.app",
  messagingSenderId: "421106379141",
  appId: "1:421106379141:web:b95fca28a658b458f73cec",
  measurementId: "G-CGXXJQM6XX",
  databaseURL: "https://crudzki-85362-default-rtdb.firebaseio.com"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa la base de datos Realtime Database, Firestore, y Authentication
const database = getDatabase(app);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Firestore
const auth = getAuth(app); // Authentication

// Exporta las instancias para usarlas en tu aplicación
export { app, database, db, auth };

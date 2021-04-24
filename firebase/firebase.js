// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0urxfH4Debz94B94NJl8TexbdSVyNLTk",
  authDomain: "skadood-store.firebaseapp.com",
  projectId: "skadood-store",
  storageBucket: "skadood-store.appspot.com",
  messagingSenderId: "345176715251",
  appId: "1:345176715251:web:e2772a4a6135499a676c86",
  measurementId: "G-4DKY8YPL2J"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;
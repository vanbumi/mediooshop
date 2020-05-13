import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAExfWvdWkVNKUIC3db57sCHSHyvhhCm5g",
    authDomain: "mediooshop.firebaseapp.com",
    databaseURL: "https://mediooshop.firebaseio.com",
    projectId: "mediooshop",
    storageBucket: "mediooshop.appspot.com",
    messagingSenderId: "526785810832",
    appId: "1:526785810832:web:7158cd7cd031652ca2a315",
    measurementId: "G-1BCCQS71QR"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
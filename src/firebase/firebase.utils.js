import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: "AIzaSyCybIamg-mJzrYiNDXMBL6lxULxlBQQvuc",
    authDomain: "crwn-db-8ffa5.firebaseapp.com",
    databaseURL: "https://crwn-db-8ffa5.firebaseio.com",
    projectId: "crwn-db-8ffa5",
    storageBucket: "crwn-db-8ffa5.appspot.com",
    messagingSenderId: "781398473794",
    appId: "1:781398473794:web:4144f189af59dbf35581db",
    measurementId: "G-J8SGYH9JNZ"
  };

  export const createUserProfileDocument= async(userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot=userRef.get();

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select-account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;
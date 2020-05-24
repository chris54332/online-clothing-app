import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAFuZGJzLhiRYoDSoY8nS1brdlHt6-wtyI",
  authDomain: "online-clothing-shop-df861.firebaseapp.com",
  databaseURL: "https://online-clothing-shop-df861.firebaseio.com",
  projectId: "online-clothing-shop-df861",
  storageBucket: "online-clothing-shop-df861.appspot.com",
  messagingSenderId: "278344867002",
  appId: "1:278344867002:web:caf1e76256924feeb03683",
  measurementId: "G-WXSJ2D4X3K"
};

firebase.initializeApp(config);

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
      })
    } catch (error) {
      console.log('error creating user', error.meesage);
    }

  }

  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
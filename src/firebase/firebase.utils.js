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

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)
// .then(function(result) {
//     // This gives you a Google Access Token.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//    });

export default firebase;
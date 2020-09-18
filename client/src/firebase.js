import * as firebase from "firebase";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "your api key",
    authDomain: "gqlreactnode-57b13.firebaseapp.com",
    databaseURL: "https://your FB url.firebaseio.com",
    projectId: "your FB project id",
    storageBucket: "yourStorageBucket.com",
    // messagingSenderId: "444444444",
    appId: "1:44444444",
    measurementId: "G-MhhhhhhhP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

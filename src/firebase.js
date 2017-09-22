  import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyBR166UPVG8dk4kQRn7dI9revtfAz8RqhM",
    authDomain: "tests-4cafc.firebaseapp.com",
    databaseURL: "https://tests-4cafc.firebaseio.com",
    projectId: "tests-4cafc",
    storageBucket: "tests-4cafc.appspot.com",
    messagingSenderId: "701538060757"
  };

  firebase.initializeApp(config);

  export default firebase;
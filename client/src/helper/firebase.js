import firebase from 'firebase'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBL8aVYLFnPg9LQ0Lb7bbYABegVNJDpyv8",
    authDomain: "fir-m-s-e0778.firebaseapp.com",
    projectId: "fir-m-s-e0778",
    storageBucket: "fir-m-s-e0778.appspot.com",
    messagingSenderId: "790204484147",
    appId: "1:790204484147:web:ac489fff282e8023c63146"
  };

var fire =firebase.initializeApp(firebaseConfig);
export default fire;

  
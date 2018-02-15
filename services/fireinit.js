import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyBxdDlTUy_mh9Pr3wR7vjHAvvAvfZVClC0",
    authDomain: "alofamy-a150y.firebaseapp.com",
    databaseURL: "https://alofamy-a150y.firebaseio.com",
    projectId: "alofamy-a150y",
    storageBucket: "alofamy-a150y.appspot.com",
    messagingSenderId: "399879576281"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
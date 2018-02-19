import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBxdDlTUy_mh9Pr3wR7vjHAvvAvfZVClC0",
    authDomain: "alofamy-a150y.firebaseapp.com",
    databaseURL: "https://alofamy-a150y.firebaseio.com",
    projectId: "alofamy-a150y",
    storageBucket: "alofamy-a150y.appspot.com",
    messagingSenderId: "399879576281"
};

export const firebaseApp = firebase.initializeApp(config);
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.database();
export const usersCollection = firebase.firestore().collection('users');
export const messagesCollection = firebase.firestore().collection('messages');
export const typingStatus = firebase.firestore().collection('typing-status');
export const likesCollection = firebase.firestore().collection('likes');
export default firebase.firestore();

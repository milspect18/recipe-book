import * as firebase from "firebase";
import { firebaseConfig } from "./sandbox";

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const usersRef = database.ref("users");

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const yahooAuthProvider = new firebase.auth.OAuthProvider('yahoo.com');
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
    firebase,
    usersRef,
    googleAuthProvider,
    twitterAuthProvider,
    yahooAuthProvider,
    facebookAuthProvider,
    database as default
};


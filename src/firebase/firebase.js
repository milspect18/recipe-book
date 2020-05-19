import * as firebase from "firebase";
import { firebaseConfig } from "./sandbox";

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const usersRef = database.ref("users");

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, usersRef, googleAuthProvider, database as default };


import React from "react";
import { firebase, googleAuthProvider } from "../firebase/firebase";

const LoginPage = () => {
    const handleLogin = () => {
        firebase.auth().signInWithPopup(googleAuthProvider);
    };

    return (
        <div>
            <button onClick={handleLogin} >Login</button>
        </div>
    );
};

export default LoginPage;

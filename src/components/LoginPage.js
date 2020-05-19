import React from "react";
import { firebase, googleAuthProvider } from "../firebase/firebase";

const LoginPage = () => {
    const handleLogin = () => {
        firebase.auth().signInWithPopup(googleAuthProvider);
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <img src="/images/logo.png" className="login-box__logo" />
                <p className="login-box__phrase">A path to happy tastebuds!</p>
                <button
                    className="login-box__button login-box__button--google"
                    onClick={handleLogin}
                >
                    Login with Google
            </button>
            </div>
        </div>
    );
};

export default LoginPage;

import React from "react";
import {
    firebase,
    googleAuthProvider,
    yahooAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
} from "../firebase/firebase";

const LoginPage = () => {
    const handleLogin = (provider) => {
        firebase.auth().signInWithPopup(provider);
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <img src="/images/logo.png" className="login-box__logo" />
                <p className="login-box__phrase">A path to happy tastebuds!</p>

                <button
                    className="login-box__button login-box__button--google"
                    onClick={() => handleLogin(googleAuthProvider)}
                >
                    Login with Google
                </button>

                <button
                    className="login-box__button login-box__button--google"
                    onClick={() => handleLogin(yahooAuthProvider)}
                >
                    Login with Yahoo!
                </button>

                <button
                    className="login-box__button login-box__button--google"
                    onClick={() => handleLogin(facebookAuthProvider)}
                >
                    Login with Facebook
                </button>

                <button
                    className="login-box__button login-box__button--google"
                    onClick={() => handleLogin(twitterAuthProvider)}
                >
                    Login with Twitter
                </button>
            </div>
        </div>
    );
};

export default LoginPage;

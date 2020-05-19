import React from "react";
import { firebase, googleAuthProvider } from "../firebase/firebase";

const LoginPage = () => {
    const handleLogin = () => {
        firebase.auth().signInWithPopup(googleAuthProvider);
    };

    return (
        <div className="login-box">
            <h1 className="login-box__title">RecipeBook</h1>
            <p className="login-box__phrase">A path to happy tastebuds!</p>
            <button
                className="login-box__button"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
};

export default LoginPage;

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/styles.scss";
import AppRouter, { history } from "./routers/AppRouter";
import { firebase } from "./firebase/firebase";

let firstRender = true;

const mainJsx = (
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);

const renderApp = () => {
    if (firstRender) {
        ReactDOM.render(mainJsx, document.getElementById("root"));
        firstRender = false;
    }
};


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

firebase.auth().onAuthStateChanged((user) => {
    renderApp();

    // if (user) {
    //     history.push("/recipeList")
    // }
});

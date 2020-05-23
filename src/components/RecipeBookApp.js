import React, { useState, useReducer, useEffect } from "react";
import RecipesContext from "../context/recipes-context";
import recipesReducer from "../reducers/recipes";
import AppRouter, { history } from "../routers/AppRouter";
import { firebase } from "../firebase/firebase";

export default () => {
    const [user, setUser] = useState();
    const [recipes, dispatchRecipes] = useReducer(recipesReducer, []);

    useEffect(() => {
        const unsub = firebase.auth().onAuthStateChanged(setUser);

        return unsub;
    }, []);

    useEffect(() => {
        if (user) {
            history.push("/recipeList");
        }
    }, [user]);

    return (
        <RecipesContext.Provider value={{ user, setUser, recipes, dispatchRecipes }} >
            <AppRouter />
        </RecipesContext.Provider>
    );
};
import React, { useReducer } from "react";
import recipesReducer from "../reducers/recipes";
import RecipesContext from "../context/recipes-context";
import AddIngredientsForm from "./AddIngredientForm";

const RecipesApp = () => {
    const [recipes, recipesDispatch] = useReducer(recipesReducer, []);

    return (
        <RecipesContext.Provider value={{ recipes }}>
            <AddIngredientsForm />
        </RecipesContext.Provider>
    );
};

export default RecipesApp;

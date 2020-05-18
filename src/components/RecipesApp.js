import React, { useReducer } from "react";
import recipesReducer from "../reducers/recipes";
import RecipesContext from "../context/recipes-context";
import AddIngredientsForm from "./AddIngredientForm";
import RecipeItem from "./RecipeItem";

const RecipesApp = () => {
    const [recipes, recipesDispatch] = useReducer(recipesReducer, []);

    return (
        <RecipesContext.Provider value={{ recipes }}>
            <AddIngredientsForm
                recipe={{
                    name: "Spaghetti",
                    rating: 4,
                    prepTime: 20,
                    cookTime: 30
                }}
            />
        </RecipesContext.Provider>
    );
};

export default RecipesApp;

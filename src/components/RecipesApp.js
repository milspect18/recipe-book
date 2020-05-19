import React, { useReducer } from "react";
import recipesReducer from "../reducers/recipes";
import RecipesContext from "../context/recipes-context";
// import AddIngredientsForm from "./AddIngredientForm";
import RecipeItem from "./RecipeItem";

const tempRecipe = {
    name: "Double Baked Spaghetti",
    rating: 10,
    prepTime: 20,
    cookTime: 30,
    img: "https://hips.hearstapps.com/delish/assets/17/37/1505340657-baked-spaghetti-delish-1.jpg"
}

const tempRecipeTwo = {
    name: "Triple Chocolate Fountain of Death",
    rating: 5,
    prepTime: 20,
    cookTime: 30,
    img: "https://hips.hearstapps.com/delish/assets/17/37/1505340657-baked-spaghetti-delish-1.jpg"
}

const RecipesApp = () => {
    const [recipes] = useReducer(recipesReducer, []);

    return (
        <RecipesContext.Provider value={{ recipes }}>
            <RecipeItem recipe={tempRecipe} />
            <RecipeItem style={{ background: "#F0F0F0" }} recipe={tempRecipeTwo} />
            <RecipeItem recipe={tempRecipe} />
            <RecipeItem style={{ background: "#F0F0F0" }} recipe={tempRecipeTwo} />
            <RecipeItem recipe={tempRecipe} />
            <RecipeItem style={{ background: "#F0F0F0" }} recipe={tempRecipeTwo} />
            <RecipeItem recipe={tempRecipe} />
            <RecipeItem style={{ background: "#F0F0F0" }} recipe={tempRecipeTwo} />
            <RecipeItem recipe={tempRecipe} />
            <RecipeItem style={{ background: "#F0F0F0" }} recipe={tempRecipeTwo} />
        </RecipesContext.Provider>
    );
};

export default RecipesApp;

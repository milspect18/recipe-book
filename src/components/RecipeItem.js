import React from "react";

const RecipeItem = ({ recipe }) => {

    return (
        <div className="content-container" >
            <p>{`${recipe.name} is rated ${recipe.rating} stars.  It take ${recipe.prepTime + recipe.cookTime} minutes to make.`}</p>
        </div>
    );
};

export default RecipeItem;

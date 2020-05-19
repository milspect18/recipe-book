import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import breakpoints from "../styles/base/_settings.scss";


const RecipeItem = ({ recipe, style }) => {
    const smallScreen = parseInt(breakpoints.s_screen);
    const xSmallScreen = parseInt(breakpoints.xs_screen);
    const xxSmallScreen = parseInt(breakpoints.xxs_screen);

    const [isSmall, setIsSmall] = useState(window.innerWidth < smallScreen);
    const [isXSmall, setIsXSmall] = useState(window.innerWidth < xSmallScreen);
    const [isXxSmall, setIsXxSmall] = useState(window.innerWidth < xxSmallScreen);

    const handleWinResize = () => {
        const width = window.innerWidth;

        if (width < smallScreen) {
            setIsSmall(true);
        } else {
            setIsSmall(false);
        }

        if (width < xSmallScreen) {
            setIsXSmall(true);
        } else {
            setIsXSmall(false);
        }

        if (width < xxSmallScreen) {
            setIsXxSmall(true);
        } else {
            setIsXxSmall(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleWinResize);

        return () => {
            window.removeEventListener("resize", handleWinResize);
        }
    }, []);

    return (
        <div style={style} className="content-container" onClick={() => { console.log("Clicked") }} >
            <div className="recipe-list-item">
                <div className="recipe-list-item__img-crop" >
                    <img alt={recipe.name} src={recipe.img} className="recipe-list-item__img" />
                </div>

                <div className="recipe-list-item__details" >
                    <p className="recipe-list-item__title" >{recipe.name}</p>

                    {isSmall ? (
                        <p className="recipe-list-item__times" >
                            {recipe.prepTime + recipe.cookTime} min
                        </p>
                    ) : (
                            <p className="recipe-list-item__times" >
                                Prep: {recipe.prepTime} min | Cook: {recipe.cookTime} min
                            </p>
                        )}
                </div>

                {
                    !isXxSmall &&
                    <StarRating
                        className="recipe-list-item__rating"
                        count={recipe.rating}
                        minimize={isXSmall}
                    />
                }
            </div>
        </div>
    );
};

export default RecipeItem;

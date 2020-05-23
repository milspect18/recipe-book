import React, { useContext } from "react";
import { firebase } from "../firebase/firebase";
import { history } from "../routers/AppRouter";
import RecipesContext from "../context/recipes-context";

const Header = () => {
    const { setUser } = useContext(RecipesContext);

    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            setUser(undefined);
            history.push("/");
        });
    };

    return (
        <div className="content-container" >
            <div className="header-box" >
                <img src="/images/logo.png" className="header-box__logo" />

                <div className="header-box__info-container" >
                    <p className="header-box__info-text">User Name</p>
                    <p className="header-box__info-text">Favorite Recipes</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Header;

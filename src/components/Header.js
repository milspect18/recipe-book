import React from "react";

const Header = () => {

    return (
        <div className="content-container" >
            <div className="header-box" >
                <img src="/images/logo.png" className="header-box__logo" />

                <div className="header-box__info-container" >
                    <p className="header-box__info-text">User Name</p>
                    <p className="header-box__info-text">Favorite Recipes</p>
                </div>
            </div>
        </div>
    );
};

export default Header;

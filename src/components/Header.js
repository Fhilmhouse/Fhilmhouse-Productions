import React from "react";

import "../css/App.css";

function Header(){
    return(
        <div className="headerDiv">
            <img className="logo" src={require("../imgs/logo.png")} alt="Fhilmhouse Logo" />
            <h1 className="h1Title">fhilmhouse productions yeet</h1>
        </div>
    );
}

export default Header;
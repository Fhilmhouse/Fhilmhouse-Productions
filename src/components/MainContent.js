import React from "react";

import {
    NavLink
  } from "react-router-dom";

import "../css/App.css";

function MainContent(){
    return(
        <div className="mainDiv">

            <div className="itemDiv">
                <h3><NavLink className="linkStyle" exact to="/about">About</NavLink></h3>
            </div>

            <div className="itemDiv">
                <h3><NavLink className="linkStyle" exact to="/portfolio">Portfolio</NavLink></h3>
            </div>

            <div className="itemDiv">
                <h3><NavLink className="linkStyle" exact to="/podcast">Our Podcast</NavLink></h3>
            </div>

            <div className="itemDiv">
                <h3><NavLink className="linkStyle" exact to="/film-of-week">Film of the Week</NavLink></h3>
            </div>

            <div className="itemDiv">
                <h3><NavLink className="linkStyle" exact to="/contact">Contact</NavLink></h3>
            </div>
        </div>
    );
}

export default MainContent;
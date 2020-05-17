import React, { Component } from "react";
import {
    Route,
    HashRouter
  } from "react-router-dom";

import MainContent from "./components/MainContent";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Podcast from "./components/Podcast";
import FilmOfWeek from "./components/FilmOfWeek";
import Contact from "./components/Contact";


class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
              <div className="pageTitle">
                <div className="titleAndLogo">
                  <img className="logo" src={require("./imgs/logo.png")} alt="Fhilmhouse Logo" />
                  <p className="h1Title">FHILMHOUSE PRODUCTIONS</p>
                </div>
              </div>
                <div>
                  <Route path="/" component={MainContent} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/podcast" component={Podcast} />
                  <Route exact path="/film-of-week" component={FilmOfWeek} />
                  <Route exact path="/contact" component={Contact} />
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;
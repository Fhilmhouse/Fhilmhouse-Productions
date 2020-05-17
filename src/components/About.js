import React from "react";

import "../css/App.css";

function About(){
    return(
        <div>
            <div className="aboutDiv">
                <p className="pageHeaders"> About </p>
                <h3> Fhinn McClure </h3>
                <p className="siteText">
                    Aspiring writer, director and producer based in Edinburgh.
                </p>
                <p className="siteText">
                    Film fanatic, student of cinema.
                </p>
                <hr />
            </div>
            <div className="stickyFooter">
                <p>© Fhilmhouse Productions</p>
            </div>
        </div>
    );
}

export default About;
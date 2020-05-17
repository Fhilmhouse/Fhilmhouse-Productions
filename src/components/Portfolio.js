import React from "react";

function Portfolio(){
    return(
    <div>
        <div className="portfolioDiv">
            <p className="pageHeaders"> Portfolio </p>
            <div className="portfolioCard">
                <iframe
                    title="nightmare" 
                    src="https://player.vimeo.com/video/418945515" 
                    width="640" 
                    height="360" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen 
                />
                <div className="cardTextParent">
                    <p className="vidTitle">Nightmare</p>
                    <div className="cardText">
                        Short horror film.                
                    </div>
                </div>
            </div>
            <div className="portfolioCard">
                <iframe 
                    title="mcdonalds-ad"
                    src="https://player.vimeo.com/video/418983784" 
                    width="640" 
                    height="360" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                />
               <div className="cardTextParent">
                    <p className="vidTitle">McDonalds Ad</p>
                    <div className="cardText">
                        Advert for McDonalds for college coursework.                
                    </div>
                </div>
            </div>
            <div className="portfolioCard">
                <iframe
                    title="big-idea"
                    src="https://player.vimeo.com/video/418966292" 
                    width="640" 
                    height="360" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen 
                />
               <div className="cardTextParent">
                    <p className="vidTitle">Big Idea</p>
                    <div className="cardText">
                        Aristotelian logic and reasoning, educational short-film.         
                    </div>
                </div>
            </div>
            <div className="portfolioCard">
                <iframe
                    title="wings"
                    src="https://player.vimeo.com/video/418977463" 
                    width="640" 
                    height="360" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen 
                />
               <div className="cardTextParent">
                    <p className="vidTitle">Wings</p>
                    <div className="cardText">
                        Hot Wings restaurant documentary.          
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <p className="footerText">© Fhilmhouse Productions</p>
        </footer>
    </div>
    );
}

export default Portfolio;
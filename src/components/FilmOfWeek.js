import React from "react";

import "../css/App.css";

function FilmOfWeek(){
    return(
        <div>
            <div className="filmOfWeekDiv">

                <p className="pageHeaders">Film of the Week</p>

                <div className="filmOfWeekCard">
                    <h3>National Treasure - 7/10</h3>
                    <img className="filmPoster" src={require("../imgs/national_treasure.jpg")} alt="National Treasure Poster" />
                    <div className="filmOfWeekText">
                        <p>
                            I’m not sure how I’ve missed this one. 
                            The perfect Sunday morning movie. 
                            I was entertained from start to finish, however my only gripe 
                            would be that Nic Cage was quite reserved. 
                            The film didn’t take itself too seriously in a good way so I 
                            was a little disappointed there was no signature 
                            over the top Cage. I wanted to see Nic UnCaged, though I hear 
                            the sequel may be more for me then. 
                            Not sure what the message of the film was, but what I got from 
                            it is that “the real National Treasure is the 
                            man himself.” 
                            Excited for part 2.
                        </p>
                    </div>
                </div>

                <hr />

                <h3>Invisible Man - 8/10</h3>
                <img className="filmPoster" src={require("../imgs/invisible_man.jpeg")} alt="National Treasure Poster" />
                <p>
                    From the opening scene, I knew I was in for a treat. 
                    This film is masterfully tense and creative with its scares. 
                    Like 2018’s “A Quiet Place” in the sense that what could almost 
                    be labelled a gimmick was the driving force 
                    of terror throughout. In this case the use of empty spaces 
                    potentially containing the invisible abuser. 
                    Elizabeth Moss was brilliant, I don’t think that’s a controversial 
                    opinion.
                    The first act, aside from the opening was a little bit slow 
                    but necessary for building a sense of unease in 
                    the characters and audience. 
                    If this does kick off the monster verse as I’ve heard, I hope 
                    it hasn’t peaked already with Invisible Man.
                </p>

                <hr />

                <h3>The Half of It - 6/10</h3>
                <img className="filmPoster" src={require("../imgs/half_of_it.jpg")} alt="National Treasure Poster" />
                <p>
                    The thing about feel good films is they usually break you down 
                    before building you back up.
                    I was neither broken nor built while watching this film.
                    In fact, I don’t think I felt anything at all watching this. 
                    It was passably entertaining and I liked some of the camera work 
                    and graphics but I wouldn’t be in any rush at all to see this film again.
                    Then again, I’m probably not the target audience.
                    I think I laughed once.
                </p>

                <hr />

                <h3>The Breakfast Club - 5/10</h3>
                <img className="filmPoster" src={require("../imgs/breakfast_club.jpg")} alt="National Treasure Poster" />
                <p>
                    Slow and tedious. 
                    I get it’s an important film but I didn’t relate to any of the characters 
                    and had to force myself through to the end. 
                    Not much else to say about this one other than “Planes, Trains and Automobiles” 
                    is still my favourite John Hughes film.
                </p>
                <hr />

                <h3>The Martian - 8/10</h3>
                <img className="filmPoster" src={require("../imgs/the_martian.jpg")} alt="National Treasure Poster" />
                <p>
                    Great source material, direction, visuals, cast, the list goes on and on.
                    I’m happy for the success of this film that it definitely deserves, and I 
                    was pleasantly surprised how likeable I found Matt Damon, he was genuinely 
                    funny at times.
                    Funnily enough it made me want to re watch Breaking Bad. I guess I’m just 
                    a sucker for anything which involves a genius solving escalating life or 
                    death situations by “sciencing the shit out of it” in a desert.
                </p>

                <hr />
            </div>
            <footer>
                <p className="footerText">© Fhilmhouse Productions</p>
            </footer>
        </div>
    );
}

export default FilmOfWeek;
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';



function Podcast(){

    const soundCloudIcon = <FontAwesomeIcon className="soundCloudIcon" icon={faSoundcloud} />
    const youTubeIcon = <FontAwesomeIcon className="youTubeIcon" icon={faYoutube} />
    const faceBookIcon = <FontAwesomeIcon className="faceBookIcon" icon={faFacebook} />

    return(
        <div>
            <div className="podcastPageDiv">
                <p className="pageHeaders">Screen Spew</p>
                <div className="podcastDiv">
                    <div className="podcastCard">
                        <div className="podcastTextDiv"><img className="podcastImg" style={{marginTop:"50px"}} src={require("../imgs/screen-spew.jpg")} alt="cover for screen spew" />
                            <div className="podcastTextDiv"></div>
                            <p> 
                                Screenspew is a collaborative podcast featuring myself, Niall Gavigan, Liam Belcher
                                and Conall La Spina.
                                <br />
                                <br />
                                Head over to our Screen Spew youtube page to keep updated with movie news and to 
                                listen to our discussions about the latest films.
                            </p>
                            </div>
                        </div>
                    <hr />
                    <h3> Where to Listen</h3>
                    <div className="iconDiv">
                        <a href="https://soundcloud.com/screenspew">{soundCloudIcon}</a>
                        <a href="https://www.youtube.com/channel/UC8KWObQUN6X8UPI4UD2b3Gw">{youTubeIcon}</a>
                        <a href="https://www.facebook.com/ScreenSpew/">{faceBookIcon}</a>
                    </div>
                    <hr />
                </div>
            </div>
            <footer>
                <p className="footerText">© Fhilmhouse Productions</p>
            </footer>
    </div>
    );
}

export default Podcast;
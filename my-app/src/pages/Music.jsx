
import React from "react";

const Music = props => {


    return (
        <div className="content">
            <h2>Music Experience</h2>
            <p>I am an experienced guitarist and vocalist and have performed with various bands and artists.</p>

            <div className="projectSection">
                <div className="proj1">
                    <h2>k.{'\u00f3'}la</h2>
                    <p>I have been a member of the band of k.{'\u00f3'}la since 2019. We have played at many events around Reykjavík and around the country, including Hátíðni and Mannfólkið breytist í slím. In 2022, we performed in Lodz, Poland and in Copenhagen.</p>
                    <div className="images">
                        <img width="50%" src={require("../img/music/k.ola-cover.jpg")}/>
                    </div>
                </div>
                <div className="proj2">
                    <h2>Annalísa</h2>
                    <div className="images">
                        <img width="50%" src={require("../img/music/annalisa-lunga.jpg")} />
                    </div>
                </div>
                <div className="proj3">
                    <h2>Klara Elías</h2>
                    <div className="images">
                        <img src="" />
                    </div>
                </div>
                <div className="proj4">
                    <h2>Caravan Kids</h2>
                    <div className="images">
                        <img src="" />
                    </div>
                </div>
                <div className="proj4">
                    <h2>Rakel Björk</h2>
                    <p>I have performed with the singer Rakel Björk at various events including weddings, baptisms, public events and company events.</p>
                    <div className="images">
                        <img width="50%" src={require("../img/music/artemis-kirkja.jpg")} />
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Music;
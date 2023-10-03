
import React from "react";

const About = props => {

    return (
        <div className="content">
            <div className="about">
                <div className="aboutImg">
                    <img src={require("../img/music/lunga.jpg")} width="50%" class="img-responsive" alt="Sara on stage in Seyðisfjörður" />
                </div>
                <div className="aboutText">
                    <h2>About Me</h2>

                    <p>
                        I am a software developer and guitarist with a bachelor's degree in Software Engineering and a background in sound technology.

                    </p>
                </div>
                
            </div>
        </div>

    )

}

export default About;
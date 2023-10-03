
import React from "react";

const About = props => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Ferilskra.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Ferilskra.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className="content">
            <div className="coverTitle">Sara {'\u00D3'}sk {'\u00DE'}orsteinsd{'\u00f3'}ttir</div>
            <p>Creating through technology and music</p>
            <div className="dwnldCV">
                <button onClick={onButtonClick}>Download CV</button>
            </div>
        </div>

    )

}

export default About;
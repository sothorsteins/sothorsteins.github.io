
import React, { useState } from "react";
import ProjectList from "../components/ProjectList.jsx";
import SMCProjects from "../components/SMCProjects.jsx";

const Portfolio = props => {
    let [isSMC, setSMC] = useState(true);
    let [isSE, setSE] = useState(false);

    let SMCclassName = isSE ? 'hidden' : '';
    let SEclassName = isSMC ? 'hidden' : '';
    let SMCbuttonName = isSMC ? 'selected' : '';
    let SEbuttonName = isSE ? 'selected' : '';

    const handleSMCButton = () => {
        setSMC(true);
        setSE(false);
        SMCclassName = isSE ? 'hidden' : '';
        SEclassName = isSMC ? 'hidden' : '';
        SMCbuttonName = isSMC ? 'selected' : '';
        SEbuttonName = isSE ? 'selected' : '';
    }
    const handleSEButton = () => {
        setSE(true);
        setSMC(false);
        SMCclassName = isSE ? 'hidden' : '';
        SEclassName = isSMC ? 'hidden' : '';
        SMCbuttonName = isSMC ? 'selected' : '';
        SEbuttonName = isSE ? 'selected' : '';
    }

    
    return (
        <div className="content">
            <div className="portfolio-nav">
                <button onClick={handleSMCButton} className={SMCbuttonName} > Sound and Music Computing</button>
                <button onClick={handleSEButton} className={SEbuttonName} > Software Engineering</button>
            </div>
            <div className={SEclassName}>
                <p>Projects I made while studying Software Engineering at the University of Iceland.</p>
                <ProjectList isShown={isSE}></ProjectList>
            </div>
            <div className={SMCclassName}>
                <p>Projects I made while studying Sound and Music Computing at Aalborg University in Copenhagen.</p>
                <SMCProjects></SMCProjects>
            </div>
            
            
        </div>

    )

}

export default Portfolio;

import React from "react";
import { SMCprojects } from "../data.js";
import Project from "./Project.jsx";

const SMCProjects = ({ isShown }) => {
    const langInd = 0;

    const projectItems = SMCprojects.map((project) =>
        <Project key={project.id}
            name={project.name}
            description={project.description[langInd].text}
            imgUrl={project.imgUrl}
            url={project.projectUrl}
            videoUrl={project.videoUrl}>
        </Project>
    );

    return (
        <div className="projects">
            {projectItems}
        </div>

    )

}

export default SMCProjects;
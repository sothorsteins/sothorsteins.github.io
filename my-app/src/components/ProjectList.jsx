
 import React from "react";
 import {projects} from "../data.js";
import Project from "./Project.jsx";
import styled from "styled-components";

const langInd = 0;

const projectItems = projects.map((project) =>
    <Project key={project.id}
        name={project.name}
        description={project.description[langInd].text}
        imgUrl={project.imgUrl}
        url={project.projectUrl}>
    </Project>
);

/*const Wrapper = styled.div`
    display: ${props => (props.isShown === true ? 'unset' : 'none')};
`;*/
const ProjectList = ({ isShown }) => {

    return (
            <div className="projects">
                {projectItems}
            </div>
       
      ) 
    
  }
  
  export default ProjectList;
import React from "react";
import MediaBox from "./MediaBox.jsx";

const Project = ({ url, imgUrl, description, name, videoUrl }) => {
      return (
          <div className="project">
            <MediaBox imgUrl={imgUrl} videoUrl={videoUrl} url={url}></MediaBox>
            
            <div className="project-summary">
                <h3>{name}</h3>
                <p className="lang_is">{description}</p>
                <p className="lang_en">{description}</p>
            </div>
        </div>
       
      ) 
    
  }
  
  export default Project;
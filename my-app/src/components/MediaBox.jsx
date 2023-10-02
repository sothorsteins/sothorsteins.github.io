import React from "react";

const MediaBox = ({ url, imgUrl, videoUrl }) => {
    if (imgUrl != "") {
        return (
            <div className="projectCover">
                <a href={url}>
                    <img src={imgUrl} className="img-responsive" />
                </a>
            </div>
        )
    }

    else if (videoUrl != "") {
        return (
            <div className="projectCover">
              
                <iframe width="560" height="315"
                    src={videoUrl}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>

            </div>
        )
    }

    else {
        return (
            <div/>
        )
    }
    
}

export default MediaBox;
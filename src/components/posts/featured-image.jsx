import React from "react";
import {GatsbyImage, getImage } from "gatsby-plugin-image";
const typePropsImage = (image) => typeof image === "object" && image !== null
const FeaturedImage = ({image, lazy = false}) => {
    console.log(getImage(image))
    if(!typePropsImage(image)) return null;
    return (
        <>
            {lazy ?
                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained team_block">
                    <img src={getImage(image).images.fallback.src} alt=""/>
                </div>
                :
                <GatsbyImage
                    imgClassName="team_img"
                    className="team_block"
                    image={getImage(image)}
                    alt="123"
                />
            }
        </>
    )
}

export default FeaturedImage;

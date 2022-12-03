import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const typePropsImage = (image) => typeof image === "object" && image !== null
const FeaturedImage = ({image, lazy = false}) => {
    if (!typePropsImage(image)) return null;
    return (
        <>
            {lazy ?
                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained team_block">
                    <img src={image.childImageSharp.fluid?.base64} alt="Red dot"/></div>
                :
                <GatsbyImage
                    imgClassName="team_img"
                    className="team_block"
                    image={getImage(image)}
                    alt="123"
                />}
        </>
    )
}

export default FeaturedImage;

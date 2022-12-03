import React from "react";
import {GatsbyImage, getImage } from "gatsby-plugin-image";
const typePropsImage = (image) => typeof image === "object" && image !== null
const FeaturedImage = ({image, lazy = true}) => {
    console.log(lazy)
    return (
        <>
            {typePropsImage(image) ?
                <GatsbyImage
                    imgClassName="team_img"
                    className="team_block"
                    loading={lazy ? 'lazy' : 'eager'}
                    image={getImage(image)}
                    placeholder="none"
                    alt="123"
                />
                :
                null
            }
        </>
    )
}

export default FeaturedImage;

import React from "react";
import {GatsbyImage, getImage } from "gatsby-plugin-image";
const typePropsImage = (image) => typeof image === "object" && image !== null
const FeaturedImage = ({image, lazy = true}) => {
    return (
        <>
            {typePropsImage(image) ?
                <GatsbyImage
                    fadeIn={false}
                    imgClassName="team_img"
                    durationFadeIn={10}
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

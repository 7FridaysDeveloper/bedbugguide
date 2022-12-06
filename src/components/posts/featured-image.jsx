import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const typePropsImage = (image) => typeof image === "object" && image !== null
const FeaturedImage = ({image, lazy = true}) => {
    if (typeof image === 'string') {
        return  (
            <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained team_block">
                <img src={image} alt="post-image" loading={lazy ? 'lazy' : 'auto'} />
            </div>
        )
    }

    return (
        <>
            {typePropsImage(image) ?
                <GatsbyImage
                    imgClassName="team_img"
                    className="team_block"
                    loading={lazy ? 'lazy' : 'eager'}
                    image={getImage(image)}
                    placeholder="none"
                    alt="post-image"
                />
                :
                null
            }
        </>
    )
}

export default FeaturedImage;

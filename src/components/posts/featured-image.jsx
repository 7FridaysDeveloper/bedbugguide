import React from "react";
import {GatsbyImage, getImage , StaticImage} from "gatsby-plugin-image";
const typePropsImage = (image) => typeof image === "object" && image !== null
const FeaturedImage = ({image, lazy = true}) => {
    console.log( typePropsImage(image) , '1231');
    return (
        <>
            {typePropsImage(image) ?
                <GatsbyImage
                    imgClassName="team_img"
                    className="team_block"
                    loading={lazy ? 'lazy' : 'eager'}
                    image={getImage(image)}
                    alt="123"
                />
                :
                <StaticImage
                    src="../../images/Rectangle-10.jpg"
                    alt="bg"
                    loading="eager"
                />
            }
        </>
    )
}

export default FeaturedImage;

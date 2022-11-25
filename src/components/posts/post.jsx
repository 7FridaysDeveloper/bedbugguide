import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import FeaturedImage from "./featured-image";
import { Link } from "gatsby";
const Post = ({ title, featuredImage, date, uri }) => {
    return (
        <div className="post">
            <Link to={uri} partiallyActive={true}>
                <div className="gradient"></div>
                <div className="wrap-text">
                    <div className="img-wrap">
                        <FeaturedImage image={featuredImage} />
                    </div>
                    <div className="txt">
                        <div>
                            <h2>{title}</h2>
                        </div>
                        <div className="date">
                            <StaticImage
                                src="../../images/calendar-gray.png"
                                alt="bg"
                                loading="eager"
                            />
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Post;

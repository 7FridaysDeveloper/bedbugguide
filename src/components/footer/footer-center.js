import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import AllCategories from "./all-categories";
import FooterPopularPost from "../footer-popular-post";
const FooterCenter = () => {

    return (
        <div className="footer-center">
            <StaticImage
                src="../../images/bg-footer.jpg"
                alt="bg"
                loading="lazy"
                placeholder="none"
            />
            <div className="container">
                <div className="item categories">
                    <h4>Categories</h4>
                    <div className="line">
                    </div>
                    <AllCategories />
                </div>
                <div className="item popular-posts">
                    <h4>Popular Posts</h4>
                    <div className="line"></div>
                    <FooterPopularPost />
                </div>
                <div className="item our-step">
                    <h4>Our 3 step approach</h4>
                    <div className="line"></div>
                    <div className="text">
                        Discover our proven to work 3 step approach that has helped hundreds. Read our short article
                        to see exactly how you too can
                        <a href="/simple-trick-exterminates-bed-bugs-overnight/"> <u> completely exterminate bed
                            bugs.</u></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterCenter;
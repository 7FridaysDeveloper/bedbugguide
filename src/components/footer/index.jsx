import React from "react";
import {graphql, useStaticQuery, Link } from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import SharePage from "../share-page";
// import FooterCenter from "./footer-center";
// import FooterBoottom from "./footer-bottom";
import "./style.css";


const Footer = () => {

    const data = useStaticQuery(graphql`
    query FooterMenu {
       wp {
           allSettings {
             generalSettingsDescription
             generalSettingsTitle
           }
       }
    }
  `);
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <Link to={"/"}>
                        <StaticImage
                            src="../../images/logowhite.png"
                            alt="bg"
                            loading="lazy"
                            placeholder="none"
                        />
                    </Link>
                    <div className="share-us">
                        <SharePage slug={'/'} title={data.wp?.allSettings?.generalSettingsTitle}/>
                    </div>
                </div>
            </div>
            {/*<FooterCenter />*/}
            {/*<FooterBoottom />*/}
        </footer>
    );
};

export default React.memo(Footer);

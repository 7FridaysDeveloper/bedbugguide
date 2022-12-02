import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import usePopularPosts from "../../hooks/usePopularPosts";
import {StaticImage} from "gatsby-plugin-image";
import parse from "html-react-parser";
import FolderSvg from "src/images/svg/folder.svg";

import "./style.css";

const Footer = () => {
    const popularPost = usePopularPosts(8);

    const data = useStaticQuery(graphql`
    query FooterMenu {
      footerMenu: allWpMenuItem(filter: { locations: { eq: FOOTER_MENU } }) {
        nodes {
          uri
          label
        }
      } 
      allWpCategory {
        nodes {
          name
          uri
        }
      }
    }
  `);


    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <Link to={"/"}>
                        {/* <FooterLogoSvg />*/}
                        <StaticImage
                            src="../../images/logowhite.png"
                            alt="bg"
                            loading="eager"
                            placeholder="none"
                        />
                    </Link>
                    <div className="share-us">
                        Share us:
                    </div>
                </div>
            </div>
            <div className="footer-center">
                <StaticImage
                    src="../../images/bg-footer.jpg"
                    alt="bg"
                    loading="eager"
                    placeholder="none"
                />
                <div className="container">
                    <div className="item categories">
                        <h4>Categories</h4>
                        <div className="line">

                        </div>
                        <ul>
                            {data.allWpCategory.nodes.map(({uri, name}) => (
                                <li key={uri}>
                                    <Link to={uri}><FolderSvg/>{name}</Link>
                                </li>
                            ))}
                        </ul>


                    </div>
                    <div className="item popular-posts">
                        <h4>Popular Posts</h4>
                        <div className="line">
                            <ul>
                            {popularPost.map(post => (
                                <li className="post-cat" key={post.id}>
                                    <div className="post-category">
                                        <Link to={'/' + post.categories[0].slug}>{post.categories[0]?.name}</Link>
                                    </div>
                                    <h3 className="post-title">
                                        <Link to={post.uri}>{parse(post.title)}</Link>
                                    </h3>
                                </li>
                            ))}
                            </ul>
                        </div>
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
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        <span>Copyright © 2022.  Bed Bug Guide.</span>
                        Acceptance of Terms of Use These Terms of Use govern your use of the bedbugguide.com
                        service and Web site. By using, visiting, or browsing the bedbugguide.com Web site,
                        you accept and agree to be bound by these Terms of Use. If you do not agree to these
                        Terms of Use, you should not use the bedbugguide.com service or Web site. These Terms
                        of Use are an ongoing contract between you and bedbugguide.com and apply to your use of
                        the bedbugguide.com service and Web site. These Terms of Use affect your rights and you
                        should read them carefully. BedBugGuide.com owned and operated by SayByeBugs.
                        <ul className="footer-menu-bottom">
                            {data.footerMenu.nodes.map(({uri, label}) => (
                                <li key={uri}>
                                    <Link to={uri}>  {label}</Link> <span> - </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="contact-us-footer">

                        Contact us: <a href={"mailto:support@saybyebugs.com"}>support@saybyebugs.com</a>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;

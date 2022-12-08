import React from "react";
import {graphql, useStaticQuery} from "gatsby";

const FooterBottom = () => {
    const data = useStaticQuery(graphql`
    query FooterBottomMenu {
      footerMenu: allWpMenuItem(filter: { locations: { eq: FOOTER_MENU } }) {
        nodes {
          uri
          label
        }
      }
    }
  `);
    return (
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
                                <a href={uri}>  {label}</a> <span> - </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="contact-us-footer">
                    Contact us: <a href={"mailto:support@saybyebugs.com"}>support@saybyebugs.com</a>
                </div>
            </div>

        </div>
    )
}

export default React.memo(FooterBottom);
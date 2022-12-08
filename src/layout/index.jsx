import React, {useContext} from "react";
import {useStaticQuery, graphql} from "gatsby";
import Header from "src/components/header";
import Seo, {SEOContext} from 'gatsby-plugin-wpgraphql-seo';
import Loadable from 'react-loadable';
import ClipLoader from "react-spinners/ClipLoader";
import FooterScript from "../wp-scripts/footer-script";
import {Helmet} from "react-helmet";
import ThemeContext from "../context/theme-context";
import Modal from "../components/modal";

const Footer = Loadable({
    loader: () => import("../components/footer"),
    loading: ClipLoader,
});

import "../styles/global.css";

const Index = ({children}) => {
    const theme = useContext(ThemeContext);
    const {
        wp,
    } = useStaticQuery(graphql`
    query SiteInfoQuery {
      wp {
        allSettings {
          generalSettingsDescription
          generalSettingsTitle
        }
        seo {
          meta {
            homepage {
              description
              title
            }
          }
          contentTypes {
            post {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
              schema {
                raw
              }
            }
            page {
              metaDesc
              metaRobotsNoindex
              schemaType
              title
            }
          }
          webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
          }
          schema {
            companyName
            personName
            companyOrPerson
            inLanguage
            wordpressSiteName
            siteUrl
            siteName
            inLanguage
            logo {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          social {
            facebook {
              url
              defaultImage {
                sourceUrl
                mediaItemUrl
              }
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            mySpace {
              url
            }
            pinterest {
              url
              metaTag
            }
            twitter {
              username
            }
            wikipedia {
              url
            }
            youTube {
              url
            }
          }
        }
      }
    }
  `);
    return (
        <>
            <FooterScript/>
            { theme?.state?.modelSearch ? <Modal/> : null }
            <Header/>
            <SEOContext.Provider value={wp}>
                {children}
            </SEOContext.Provider>
            <Footer/>
            <Helmet>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
                <meta property="og:locale" content={wp.seo.schema.inLanguage}/>
                <meta name="og:site_name" content={wp.allSettings.generalSettingsTitle}/>
            </Helmet>
            <Seo postSchema={JSON.parse(wp.seo.contentTypes.post.schema.raw)}/>
            <div id="footer-script"></div>
        </>
    );
};

export default Index;

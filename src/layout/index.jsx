import React, {useContext} from "react";
import {useStaticQuery, graphql} from "gatsby";
import Header from "src/components/header";
//import Seo, {SEOContext} from 'gatsby-plugin-wpgraphql-seo';
//import FooterScript from "../wp-scripts/footer-script";
//import {Helmet} from "react-helmet";
import ThemeContext from "../context/theme-context";
import Modal from "../components/modal";
//import Footer from "../components/footer";

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
    console.log(wp)
    return (
        <>
            {/*<FooterScript/>*/}
            { theme?.state?.modelSearch ? <Modal/> : null }
            <Header/>
            {children}
            {/*<Footer/>*/}
            {/*<Helmet>*/}
            {/*    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>*/}
            {/*    <meta property="og:locale" content={wp.seo.schema.inLanguage}/>*/}
            {/*    <meta name="og:site_name" content={wp.allSettings.generalSettingsTitle}/>*/}
            {/*</Helmet>*/}
            {/*<Seo postSchema={JSON.parse(wp.seo.contentTypes.post.schema.raw)}/>*/}
        </>
    );
};

export default Index;

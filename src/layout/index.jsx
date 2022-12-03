import React, { useState, useEffect } from "react";
import Loadable from 'react-loadable';
import {useStaticQuery, graphql} from "gatsby";
import Header from "src/components/header";
import Seo, {SEOContext} from 'gatsby-plugin-wpgraphql-seo';
import FooterScript from "../wp-scripts/footer-script";
import ClipLoader from "react-spinners/ClipLoader";

const Footer = Loadable({
    loader: () => import('src/components/footer'),
    loading: ClipLoader
});

import "../styles/global.css";
const Index = ({children, path}) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener('load', () => {
            alert(2);
            setTimeout( () => setShow(true), 10)
        }, { once: true})
    }, [])
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
            <Header path={path}/>
            <SEOContext.Provider value={wp}>
                {children}
            </SEOContext.Provider>
            { show ? <Footer /> : null}
            {/*    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>*/}
            {/*    <meta property="og:locale" content={wp.seo.schema.inLanguage}/>*/}
            {/*    <meta name="og:site_name" content={wp.allSettings.generalSettingsTitle}/>*/}
            <Seo postSchema={JSON.parse(wp.seo.contentTypes.post.schema.raw)} />
            <FooterScript />
            <div id="footer-script"></div>
        </>
    );
};

export default Index;

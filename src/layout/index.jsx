import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {SEOContext} from "gatsby-plugin-wpgraphql-seo";
import Header from "src/components/header";
import Footer from "src/components/footer";
import "../styles/global.css";







const Index = ({children , path}) => {

    const {
        wp: {seo},
    } = useStaticQuery(graphql`
    query SiteInfoQuery {
      wp {
        seo {
          contentTypes {
            post {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
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
            <Header path={path} />
            <SEOContext.Provider value={{global: seo}}>
                {children}
            </SEOContext.Provider>
            <Footer/>
        </>
    );
};

export default Index;

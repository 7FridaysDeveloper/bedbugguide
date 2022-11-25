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
                <section className="blog-posts">
                    <div className="container">
                        <div className="grid-box">
                            <div className="left-wrapper">
                                <div className="item">
                                    <a href="#" className="img">
                                        <img src="https://www.bedbugguide.com/wp-content/uploads/2022/11/3229987793_enormous_bug_zoomed_under_the_magnifying_glass__on_a_bedroom_mattress_-2-393x230.png" alt=""/>
                                    </a>
                                    <div className="txt">
                                        <div className="post-category">
                                            <a href="#">Bed Bug News , </a><a href="#">Bed Bug News2 ,</a><a href="#">Bed Bug News3</a>
                                            <h3><a href="#">How to Identify a Bed Bug?</a></h3>
                                            <div className="excerpt">
                                                If you wonder what bed bugs are, how do they spread, just how fast they can infest your home and what you can do about it watch this quick video: If you...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="img">
                                        <img src="https://www.bedbugguide.com/wp-content/uploads/2022/11/3229987793_enormous_bug_zoomed_under_the_magnifying_glass__on_a_bedroom_mattress_-2-393x230.png" alt=""/>
                                    </a>
                                    <div className="txt">
                                        <div className="post-category">
                                            <a href="#">Bed Bug News , </a><a href="#">Bed Bug News2 ,</a><a href="#">Bed Bug News3</a>
                                            <h3><a href="#">How to Identify a Bed Bug?</a></h3>
                                            <div className="excerpt">
                                                If you wonder what bed bugs are, how do they spread, just how fast they can infest your home and what you can do about it watch this quick video: If you...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <a href="#" className="img">
                                        <img src="https://www.bedbugguide.com/wp-content/uploads/2022/11/3229987793_enormous_bug_zoomed_under_the_magnifying_glass__on_a_bedroom_mattress_-2-393x230.png" alt=""/>
                                    </a>
                                    <div className="txt">
                                        <div className="post-category">
                                            <a href="#">Bed Bug News , </a><a href="#">Bed Bug News2 ,</a><a href="#">Bed Bug News3</a>
                                            <h3><a href="#">How to Identify a Bed Bug?</a></h3>
                                            <div className="excerpt">
                                                If you wonder what bed bugs are, how do they spread, just how fast they can infest your home and what you can do about it watch this quick video: If you...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <aside>

                                {/*POPULAR POSTS*/}
                                <div className="popular-post wrapper-items">
                                    <h4>Popular Posts</h4>
                                    <div className="line"></div>
                                    <div className="post-cat">
                                        <div className="post-category">
                                            <a href="https://www.bedbugguide.com/category/general-information/">general
                                                information</a>
                                        </div>
                                        <h3 className="post-title"><a
                                            href="https://www.bedbugguide.com/pictures-of-adult-bed-bugs/">Pictures Of Adult
                                            Bed Bugs</a>
                                        </h3>
                                    </div>
                                    <div className="post-cat">
                                        <div className="post-category">
                                            <a href="https://www.bedbugguide.com/category/general-information/">general
                                                information</a>
                                        </div>
                                        <h3 className="post-title"><a
                                            href="https://www.bedbugguide.com/pictures-of-adult-bed-bugs/">Pictures Of Adult
                                            Bed Bugs</a>
                                        </h3>
                                    </div>
                                    <div className="post-cat wrapper-items">
                                        <div className="post-category">
                                            <a href="https://www.bedbugguide.com/category/general-information/">general
                                                information</a>
                                        </div>
                                        <h3 className="post-title"><a
                                            href="https://www.bedbugguide.com/pictures-of-adult-bed-bugs/">Pictures Of Adult
                                            Bed Bugs</a>
                                        </h3>
                                    </div>
                                </div>

                                {/*CATEGOTRIES*/}
                                <div className="categories">
                                    <h4>categories</h4>
                                    <div className="line"></div>
                                    <div className="categories">
                                        <ul>
                                            <li>
                                                <div className="number">1</div>
                                                <div className="summary"><a
                                                    href="https://www.bedbugguide.com/category/bed-bug-bites/"
                                                    title="View all posts in bed bug bites">bed bug bites<small>6
                                                    Articles</small></a></div>
                                            </li>
                                            <li>
                                                <div className="number">2</div>
                                                <div className="summary"><a
                                                    href="https://www.bedbugguide.com/category/bed-bug-facts/"
                                                    title="View all posts in bed bug facts">bed bug facts<small>14
                                                    Articles</small></a></div>
                                            </li>
                                            <li>
                                                <div className="number">3</div>
                                                <div className="summary"><a
                                                    href="https://www.bedbugguide.com/category/bed-bug-interview/"
                                                    title="View all posts in bed bug interview">bed bug interview<small>2
                                                    Articles</small></a></div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/*TAGS*/}
                                    <div className="tags">
                                        <h4>Tags</h4>
                                        <div className="line"></div>
                                        <div className="tags-wrap">
                                            <a href="#">Tags1</a>
                                            <a href="#">Tags2</a>
                                            <a href="#">Tags3</a>
                                        </div>
                                    </div>

                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </SEOContext.Provider>
            <Footer/>
        </>
    );
};

export default Index;

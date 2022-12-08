import React, {useEffect, useState, useLayoutEffect} from "react";
import {graphql} from "gatsby";
import TheContent from "../../components/the-content";
import ReadMore from "../../components/read-more";
import Loadable from "react-loadable";
import ClipLoader from "react-spinners/ClipLoader";
import Seo from "gatsby-plugin-wpgraphql-seo";

const Comments = Loadable({
    loader: () => import("../../components/comments"),
    loading: ClipLoader,
});


const SharePage = Loadable({
    loader: () => import("../../components/share-page"),
    loading: ClipLoader,
});

const AddComments = Loadable({
    loader: () => import("../../components/add-comments"),
    loading: ClipLoader,
});

const textImportFile = (name = '1') => import(`/static/${name}.txt`).then(text => text)
const Index = ({data: {page}}) => {
    const showSection = (page.sidebarSettings.sidebarSettings === "Show");
    const [postSettings, setPostSettings] = useState(null);
    const [txtContent, setTxtContent] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch(`${process.env.GATSBY_URL}/wp-json/posts-view/v1/${page?.databaseId}`)
            .then(res => res.json())
            .then(setPostSettings);
    }, [])

    useEffect(() => {
        if (page.databaseId === 380) {
            textImportFile().then(res => setTxtContent(res.default))
        }

    }, []);

    useLayoutEffect(() => {
        setShow(true);
    }, [])

    if(show === false) return null;
    return (
        <>
            <div className="content">
                <div className="container">
                    <div id="upxif"></div>
                    <div className="grid-box">
                        <main>
                            <TheContent text={page.databaseId === 380 ? txtContent : page?.content}
                                        title={page?.title}/>
                            <SharePage title={page.title} slug={page.uri}/>
                        </main>
                        <aside>
                            {showSection === true ? <ReadMore/> : null}
                        </aside>
                        {page.commentStatus === 'open' ?
                            <>
                                <Comments count={postSettings?.comment_count} id={page.databaseId} type={'page'}/>
                                <AddComments id={page.databaseId}/>
                            </> :
                            null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;

export const Head = ({data: {page}}) => {

    return (
        <>
            <link rel="canonical" href={process.env.CURRENT_URL + page.uri}/>
            <meta property="og:url" content={process.env.CURRENT_URL + page.seo.opengraphUrl}/>
            <Seo
                postSchema={JSON.parse(page.seo?.schema?.raw)}
                post={page}
            />
        </>
    );
}

export const pagesQuery = graphql`
  query PageById(
    $id: String!
  ) {
    page: wpPage(id: { eq: $id }) {
       seo {
          canonical
          cornerstone
          focuskw
          metaDesc
          metaKeywords
          metaRobotsNofollow
          metaRobotsNoindex
          opengraphAuthor
          opengraphDescription
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          readingTime
          title
          twitterDescription
          twitterTitle
          schema {
            raw
          }
      }
      title
      content
      databaseId
      uri
      commentStatus
      sidebarSettings {
          fieldGroupName
          sidebarSettings
      }
    }
  }
`;

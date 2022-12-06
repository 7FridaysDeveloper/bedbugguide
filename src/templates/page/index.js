import React, {useEffect, useState} from "react";
import {graphql} from "gatsby";
import TheContent from "../../components/the-content";
import ReadMore from "../../components/read-more";
import Loadable from "react-loadable";
import ClipLoader from "react-spinners/ClipLoader";

const Comments = Loadable({
    loader: () => import("../../components/comments"),
    loading: ClipLoader,
});
const AddComments = Loadable({
    loader: () => import("../../components/add-comments"),
    loading: ClipLoader,
});


const Index = (props) => {
    const showSection = (props.data.page.sidebarSettings.sidebarSettings === "Show" ? true : false);
    const [postSettings, setPostSettings] = useState(null);

    useEffect(() => {
        fetch(`${process.env.GATSBY_URL}/wp-json/posts-view/v1/${props.data?.page?.databaseId}`)
            .then(res => res.json())
            .then(setPostSettings);
    }, [])

    return (
        <div className="content">
            <div className="container">
                <div className="grid-box">
                    <main>
                        <TheContent text={props?.data?.page?.content} title={props?.data?.page?.title}/>
                    </main>
                    <aside>
                        {showSection === true ? <ReadMore/> : null}
                    </aside>
                    {props.data.page?.databaseId === 380 ?
                        <>
                            <Comments count={postSettings?.comment_count} id={props.data?.page.databaseId} type={'page'}/>
                            <AddComments id={props.data?.page.databaseId}/>
                        </> :
                        null}
                </div>
            </div>
        </div>
    );
};

export default Index;


export const pagesQuery = graphql`
  query PageById(
    $id: String!
  ) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      databaseId
      sidebarSettings {
          fieldGroupName
          sidebarSettings
      }
    }
  }
`;

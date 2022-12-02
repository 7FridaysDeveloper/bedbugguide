import React from "react";
import { graphql } from "gatsby";
import TheContent from "../../components/the-content";
import ReadMore from "../../components/read-more";

const Index = (props) => {
    console.log(props);
  const showSection = (props.data.page.sidebarSettings.sidebarSettings === "Show" ? true : false);
  return (
      <div className="content">
          <div className="container">
              <div className="grid-box">
                  <main>
                    <TheContent text={props?.data?.page?.content} title={props?.data?.page?.title} />
                  </main>
                  <aside>
                      {showSection === true ? <ReadMore /> : null}
                  </aside>
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
      sidebarSettings {
          fieldGroupName
          sidebarSettings
      }
    }
  }
`;

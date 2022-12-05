import React from "react";
import { graphql } from "gatsby";
import TheContent from "../../components/the-content";
import ReadMore from "../../components/read-more";
import FooterScript from "../../wp-scripts/footer-script";

const Index = (props) => {
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

export const Head = () => {
    return (
        <>
            <FooterScript />
        </>
    );
}

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

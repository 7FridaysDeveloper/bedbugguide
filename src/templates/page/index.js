import React from "react";
import { graphql } from "gatsby";
import TheContent from "../../components/the-content";

const Index = (props) => {
  return (
      <div className="content">
          <TheContent text={props?.data?.page?.content} />
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
    }
  }
`;

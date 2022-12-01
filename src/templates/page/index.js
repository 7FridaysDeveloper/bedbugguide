import React from "react";
import { graphql } from "gatsby";


const Index = (props) => {
    console.log(props)
  return (
      <>

      </>
  );
};

export default Index;

export const pagesQuery = graphql`
  query PageById(
    $id: String!
  ) {
    page: wpPage(id: { eq: $id }) {
      title
    }
  }
`;

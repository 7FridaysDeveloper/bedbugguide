import React from "react";
import { graphql } from "gatsby";


const Index = (props) => {
  console.log(props, 11111111111)
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

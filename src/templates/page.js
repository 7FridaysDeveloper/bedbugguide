// See .cache/page-templates after running dev/build
// to understand how this file ends up looking

import React from 'react'
import { graphql } from 'gatsby'
import { useContext } from 'react';
import Seo, { SEOContext } from "gatsby-plugin-wpgraphql-seo";

// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = pageProps => {
  const data = useContext(SEOContext);
  let components
  // ### COMPONENTS VARIABLE ### DO NOT MODIFY OR MOVE THIS COMMENT ###
  components = components.map(component => {
    return {
      name: component.__typename.split('_').pop(),
      data: component,
    }
  })
  return (
    <>
      <Seo post={Object.assign(data, pageProps.data.wpPage)} />
      {components.map((component, index) => {
        // ### COMPONENT RENDERING ### DO NOT MODIFY OR MOVE THIS COMMENT ###
        return <div key={index}>Error: The component {component.name} was not found</div>
      })}
    </>
  )
}

export default PageTemplate

// ### PAGE QUERY ### DO NOT MODIFY OR MOVE THIS COMMENT ###

import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";

import "./style.css";

const Tags = ({tags = null}) => {

    const data = useStaticQuery(graphql`
    query AllWpTags {
      allWpTag(sort: {order: DESC, fields: count}, limit: 45) {
        nodes {
          uri
          name
          count
        }
      }
    }
  `);

    data.allWpTag?.nodes.sort((a, b) => a.name.localeCompare(b.name))
    const dataTags = tags ? tags : data.allWpTag;
    return (
        <div className="tags">
            <h4>tags</h4>
            <div className="line"></div>
            <div className="tags-wrap">
                {dataTags?.nodes?.map(
                    ({uri, name, count}, index) => (
                        <Link style={{fontSize: ((count - 1) / ((count + 8) / 16)) + 8 + 'pt'}} key={index}
                              to={uri}> {name} </Link>
                    )
                )}
            </div>
        </div>
    )
}

export default Tags;
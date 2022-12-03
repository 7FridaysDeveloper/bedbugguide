import React from "react";
import {graphql,  useStaticQuery} from "gatsby";

import "./style.css";
const Tags = ({ tags = null}) => {

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
    const dataTags = tags ? tags : data.allWpTag;
    return (
        <div className="tags">
            <h4>tags</h4>
            <div className="line"></div>
            <div className="tags-wrap">
                {dataTags.nodes.map(
                    ({uri, name, count}) => (
                        <a href={uri} key={uri} style={{ fontSize: (count > 12) ? count/2.4 : 12}}>
                            {name}
                        </a>
                    )
                )}
            </div>
        </div>
    )
}

export default Tags;
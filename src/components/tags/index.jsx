import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";

import "./style.css";
const Tags = () => {

    const data = useStaticQuery(graphql`
    query AllWpTags {
      allWpTag {
        nodes {
          uri
          name
          count
        }
      }
    }
  `);

    return (
        <div className="tags">
            <h4>tags</h4>
            <div className="line"></div>
            <div className="tags-wrap">
                {data.allWpTag.nodes.map(
                    ({uri, name, count}) => (
                        <Link to={uri} key={uri} style={{ fontSize: (count > 12) ? count/2.4 : 12}}>
                            {name}
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}

export default Tags;
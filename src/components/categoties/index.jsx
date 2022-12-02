import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";

import './style.css';

const Categories = () => {
    const data = useStaticQuery(graphql`
    query AllWpCategories {
      allWpCategory {
        nodes {
          name
          uri
          count
        }
      }
    }
  `);


    return (
        <div className="categories">
            <h4>categories</h4>
            <div className="line"></div>
            <div className="categories-wrap">
                <ul>
                    {data.allWpCategory.nodes.map(
                        ({uri, name, count} , index) => (
                            <li key={uri}>
                                <div className="number">{index+1}</div>
                                <div className="summary">
                                    <Link to={uri}>
                                        {name}
                                        <small> {count} Articles</small>
                                    </Link>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Categories;
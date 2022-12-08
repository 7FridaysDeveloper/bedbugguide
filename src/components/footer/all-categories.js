import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import FolderSvg from "../../images/svg/folder.svg";

const AllCategoriesFooter = () => {
    const data = useStaticQuery(graphql`
    query FooterMenuCategories {
      allWpCategory {
        nodes {
          name
          uri
        }
      }
    }
  `);
    return (
        <ul>
            {data.allWpCategory.nodes.map(({uri, name}) => (
                <li key={uri}>
                    <a href={uri}><FolderSvg/>{name}</a>
                </li>
            ))}
        </ul>
    )
}

export default React.memo(AllCategoriesFooter);
import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const HeaderMenu = () => {
    const { links } = useStaticQuery(graphql`
    query MenuHeader {
      links: allWpMenuItem(filter: { locations: { eq: HEADER_MENU } }) {
        edges {
          node {
            label
            uri
          }
        }
      }
    }
  `);

    return (
        <div className="menu-header-menu-container">
            <ul>
                {links.edges.map(({ node }) => (
                    <li className="menu-item" key={node.uri}>
                        <Link activeClassName="menu-item-active" to={node.uri}>
                            {node.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeaderMenu;

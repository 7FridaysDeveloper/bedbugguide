import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const HeaderMenu = ({ onMouseEnter = () => {}, onMouseLeave = () => {} }) => {
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

    const mouseEnter = ({ currentTarget }) => {
        const left = currentTarget.offsetLeft + currentTarget.querySelector('a').offsetLeft;
        const width = currentTarget.querySelector('a').offsetWidth;
        onMouseEnter(left, width)
    }

    return (
        <div className="menu-header-menu-container">
            <ul>
                {links.edges.map(({ node }) => (
                    <li className="menu-item" key={node.uri}  onMouseEnter={mouseEnter} onMouseLeave={onMouseLeave}>
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

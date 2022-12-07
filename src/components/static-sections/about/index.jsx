import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import './style.css';
import parse from "html-react-parser";

const About = () => {

    const data = useStaticQuery(graphql`
    query AboutData {
      wp {
        themeGeneralSettings {
          themeOptions {
            aboutBedbugguide
          }
        }
      }
    }
  `);

    return(
        <div className="about">
            {parse(data.wp.themeGeneralSettings?.themeOptions?.aboutBedbugguide || '')}
        </div>
    )
}

export default About;
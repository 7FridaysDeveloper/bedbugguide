import React from "react";
import {graphql, useStaticQuery} from "gatsby";
//import parse from "html-react-parser";

import './style.css';

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
            {data.wp.themeGeneralSettings?.themeOptions?.aboutBedbugguide}
        </div>
    )
}

export default About;
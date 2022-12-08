import React from "react";
import {graphql, useStaticQuery} from "gatsby";
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
        <div className="about" dangerouslySetInnerHTML={{__html: data.wp.themeGeneralSettings?.themeOptions?.aboutBedbugguide }}>
        </div>
    )
}

export default React.memo(About);
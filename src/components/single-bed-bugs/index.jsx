import React from "react";
import parse from "html-react-parser";
import {graphql, Link, useStaticQuery} from "gatsby";

import './style.css';

const BedBugs = () => {
    const data = useStaticQuery(graphql`
    query HowToKillBedBug {
      wp {
        themeGeneralSettings {
            themeOptions {
               howToKillBedBug {
                  title
                  url    
               }
            }
        }
      }
    }
  `);

    return(
        <div className="bed-bugs">
            <h4>HOW TO KILL BED BUGS:</h4>
            <div className="line"></div>
            <Link to={data.wp?.themeGeneralSettings?.themeOptions?.howToKillBedBug.url} >{parse(data.wp?.themeGeneralSettings?.themeOptions?.howToKillBedBug.title)}</Link>
        </div>
    );
}

export default BedBugs;
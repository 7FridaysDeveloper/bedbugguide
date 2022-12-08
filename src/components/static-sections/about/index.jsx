import React, { useRef, useEffect } from "react";
import {graphql, useStaticQuery} from "gatsby";
import './style.css';

const About = () => {
    const contentRef = useRef(null);
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

    useEffect(() => {
        contentRef.current = data.wp.themeGeneralSettings?.themeOptions?.aboutBedbugguide;
    }, [])

    return(
        <div className="about" ref={contentRef}>
        </div>
    )
}

export default React.memo(About);
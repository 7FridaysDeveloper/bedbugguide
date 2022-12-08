import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {Helmet} from "react-helmet";

export default function ThemesSettings () {
    const { wp: {themeGeneralSettings} } = useStaticQuery(graphql`
    query ThemeSettings {
      wp {
        themeGeneralSettings {
          themeOptions {
            bodyTextColor
            hoverColor
            mainColor
            mainBackground
            titleColor
          }
        }
      }
    }
  `);
    const { themeOptions } = themeGeneralSettings;
    console.log(themeOptions)
    return (
        <Helmet style={[{
            "cssText": `
               :root {
     
               }
            `
        }]}/>
    )
}
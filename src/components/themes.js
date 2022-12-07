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
    const { themeOptions } = themeGeneralSettings
    return (
        <Helmet style={[{
            "cssText": `
               :root {
                   --bg_header: ${themeOptions.mainBackground};
                   --hover_color: ${themeOptions.hoverColor};
                   --main_color: ${themeOptions.mainColor};
                   --title_color: ${themeOptions.titleColor};
                   --text_color: ${themeOptions.bodyTextColor};
               }
            `
        }]}/>
    )
}
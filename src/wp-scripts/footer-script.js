import {useEffect} from "react";
import {useStaticQuery, graphql} from "gatsby";
import nodeScriptReplace from "../util/load-script-html";

export default function FooterScript() {
    const {wp: {themeGeneralSettings}} = useStaticQuery(graphql`
        query FooterScript {
          wp {
            themeGeneralSettings {
              themeOptions {
                footerTrackingCodes
                headerTrackingCodes
              }
            }
          }
        }
    `);
    useEffect(() => {
        const footerScript = document.getElementById('footer-script');
        setTimeout(() => {
            footerScript.innerHTML = themeGeneralSettings.themeOptions.headerTrackingCodes + themeGeneralSettings.themeOptions.footerTrackingCodes;
            nodeScriptReplace(footerScript)
        }, 3000)
    }, [])
    return null;
}
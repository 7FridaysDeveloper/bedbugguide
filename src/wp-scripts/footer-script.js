import React, {useLayoutEffect} from "react";
import {useStaticQuery, graphql} from "gatsby";
import parse from "html-react-parser";

const FooterScript = () => {
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
    useLayoutEffect(() => {
        const fragmentFooter = document.createDocumentFragment();
        const fragmentHeader = document.createDocumentFragment();

        const replaceNode = (domNode, fragment) => {
            if(domNode.type === 'script') {
                const script = document.createElement('script');
                if(domNode.attribs.src !== undefined) {
                    script.src = domNode.attribs.src;
                }

                if(domNode.attribs.type !== undefined) {
                    script.type = domNode.attribs.type;
                }
                domNode.children.forEach(({ nodeValue }) =>  script.innerHTML = script.innerHTML+nodeValue);
                fragment.appendChild(script)
            }
        }
        {parse(themeGeneralSettings?.themeOptions.footerTrackingCodes, {
            replace: (domNode) => replaceNode(domNode, fragmentFooter)
        })}

        {parse(themeGeneralSettings?.themeOptions.headerTrackingCodes, {
            replace: (domNode) => replaceNode(domNode, fragmentHeader)
        })}

        let isAppendScript = false;
        const appendScript = () => {
            isAppendScript = true;
            document.head.appendChild(fragmentHeader)
            document.body.appendChild(fragmentFooter)
        }

        setTimeout(() => {
            window.addEventListener('scroll',() => {
                if(isAppendScript === false) {
                    appendScript();
                }
            }, {once: true});
        }, 1000)

        setTimeout(() => {
            if(isAppendScript === false) {
                appendScript();
            }
        }, 4000)
    }, [])
    return null;
}
export default React.memo(FooterScript);
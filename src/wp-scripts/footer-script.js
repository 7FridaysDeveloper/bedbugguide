import React, { useEffect } from "react";
import {useStaticQuery, graphql} from "gatsby";
import parse from "html-react-parser";
import {Helmet} from "react-helmet";

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
    useEffect(() => {
        const fragmentFooter = document.createDocumentFragment();
        const fragmentHeader = document.createDocumentFragment();

        const replaceNode = (domNode, fragment) => {
            if(domNode.type === 'script') {
                const script = document.createElement('script');

                if(domNode.attribs.src?.includes('conversion')) {
                    return;
                }

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
        }, 4000);

    }, [])
    if(typeof window === 'undefined') return null;
    return (
        <Helmet>
            {parse(themeGeneralSettings?.themeOptions.headerTrackingCodes, {
                replace: (domNode) => {
                    if(domNode.type === 'script') {
                        if(domNode.attribs.src?.includes('conversion')) {
                            return <script defer src={domNode.attribs.src}></script>
                        }
                        return <></>;

                }
            }})}
            {parse(themeGeneralSettings?.themeOptions.footerTrackingCodes, {
                replace: (domNode) => {
                    if(domNode.type === 'script') {
                        if(domNode.attribs.head !== undefined && domNode.attribs.src) {
                            return <script defer src={domNode.attribs.src}></script>
                        }
                        return <></>;
                    }
                }})}
        </Helmet>
    );
}
export default React.memo(FooterScript);
import React, {useEffect, useRef, useState} from "react";
import {graphql, useStaticQuery} from "gatsby";

import './style.css';

const Tabs = () => {
    const tabRef = useRef(null)
    const [isActive, setActive] = useState(false);
    const data = useStaticQuery(graphql`
    query TabsData {
      wp {
        themeGeneralSettings {
            themeOptions {
                tabs {
                    fieldGroupName
                    nameLabel
                    text
                }
            }
        }
      }
    }
  `);

    const changeTab = (indexTab) => {
        tabRef.current.innerHTML = data.wp.themeGeneralSettings.themeOptions.tabs[indexTab].text;
        setActive(indexTab);
    }

    useEffect(() => {
        changeTab(0);
    }, []);

    return (
        <div className="tabs">
            <div className="left">
                {data.wp.themeGeneralSettings.themeOptions.tabs.map(
                    ({nameLabel}, index) => (
                        <button key={index} onClick={() => changeTab(index)}
                                className={isActive === index ? 'active' : ''}>
                            {nameLabel}
                        </button>
                    )
                )}
            </div>
            <div className="right">
                <div className="text-content">
                    <div className="content-tab" ref={tabRef}>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default React.memo(Tabs);
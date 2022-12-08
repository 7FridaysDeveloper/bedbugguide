import React, {useState, useEffect} from "react";
import {graphql, useStaticQuery} from "gatsby";

import './style.css';

const Tabs = () => {
    const [tabContent, setTabContent] = useState('');
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
        let contentText = data.wp.themeGeneralSettings.themeOptions.tabs[indexTab].text;
        setTabContent(contentText);
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
                    <div className="content-tab" dangerouslySetInnerHTML={{ __html: tabContent}}>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default React.memo(Tabs);
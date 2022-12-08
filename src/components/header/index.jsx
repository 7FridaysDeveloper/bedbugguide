import React, { useState, useRef  } from "react";
import {StaticImage} from "gatsby-plugin-image";
//import ThemeContext from "src/context/theme-context";
import HeaderMenu from "src/components/header/header-menu";
import MenuSvg from "src/images/svg/menu.svg";
import SearchSvg from "src/images/svg/search.svg";
import { formatToday } from "../../util/helpers";
import AnimateHeight from "react-animate-height";
import {graphql, useStaticQuery} from "gatsby";
import "./style.css";


const Header = () => {
    console.log('Header')
    const headerRef = useRef(null);
    const [isOpeMobileMenu, setOpenMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        console.log(2222)
        setOpenMobileMenu(!isOpeMobileMenu);
    };



    const toggleClass = () => {
        //theme.dispatch({ type: 'modelSearch', payload: true })
    };

    const data = useStaticQuery(graphql`
        query HeaderSettings {
          wp {
            id
            themeGeneralSettings {
              themeOptions {
                enableCurrentDateTime
                siteLogo {
                  sourceUrl
                }
              }
            }
          }
        }
     `);

    return (
        <>
            <header ref={headerRef}>
                <div className="fixing">
                    <div className="top-header">
                        <div className="container-fluid-custom container">
                            <div className="time floatLeft">
                                {data.wp?.themeGeneralSettings?.themeOptions?.enableCurrentDateTime === 'On' ? formatToday() : ''}
                            </div>
                            <nav className="header-menu-desktop">
                                <HeaderMenu />
                            </nav>
                            <div
                                className="mobileMenu"
                                onClick={toggleMobileMenu}
                                role="presentation"
                            >
                                MENU
                                <MenuSvg />
                            </div>
                        </div>
                    </div>
                    <nav className="header-menu-mobile">
                        <AnimateHeight
                            duration={500}
                            id="animation-height-header"
                            height={isOpeMobileMenu ? "auto" : 0}
                        >
                            <HeaderMenu />
                        </AnimateHeight>
                    </nav>
                    <div className="bottom-header">
                        <div className="container">
                            <a href={"/"} className="header_logo-item">
                                <StaticImage
                                    src="../../images/logonew.png"
                                    loading="eager"
                                    placeholder="none"
                                    imgClassName="team_img"
                                    className="team_block"
                                    alt="logo"
                                />
                            </a>
                            <div className="header-search" onClick={toggleClass} >
                                <SearchSvg />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};


export default React.memo(Header);

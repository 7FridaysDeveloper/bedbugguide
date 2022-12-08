import React, { useState, useRef, useEffect, useContext } from "react";
import {StaticImage} from "gatsby-plugin-image";
import ThemeContext from "src/context/theme-context";
import AnimateHeight from "react-animate-height";
import HeaderMenu from "src/components/header/header-menu";
import AnimatedUnderlineMenu from "src/components/header/animated-underline-menu";
import MenuSvg from "src/images/svg/menu.svg";
import SearchSvg from "src/images/svg/search.svg";
import { formatToday } from "../../util/helpers";
import {graphql, useStaticQuery} from "gatsby";
import "./style.css";


const Header = () => {
    const theme = useContext(ThemeContext);
    const headerRef = useRef(null);
    const [isOpeMobileMenu, setOpenMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setOpenMobileMenu(!isOpeMobileMenu);
    };
    useEffect(() => {
        theme.dispatch({
            type: "headerHeight",
            payload: headerRef.current?.offsetHeight,
        });
    }, [headerRef]);


    const toggleClass = () => {
        theme.dispatch({ type: 'modelSearch', payload: true })
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
    /*const LogoImg = data.wp?.themeGeneralSettings?.themeOptions?.siteLogo?.sourceUrl;
    console.log(LogoImg , 'logo');*/
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
                                <AnimatedUnderlineMenu />
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

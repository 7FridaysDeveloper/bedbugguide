import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "gatsby";
import ThemeContext from "src/context/theme-context";
import AnimateHeight from "react-animate-height";
import HeaderMenu from "src/components/header/header-menu";
import AnimatedUnderlineMenu from "src/components/header/animated-underline-menu";

import MenuSvg from "src/images/svg/menu.svg";
import SearchSvg from "src/images/svg/search.svg";

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


    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <header ref={headerRef}>
                <div className="fixing">
                    <div className="top-header">
                        <div className="container-fluid-custom container">
                            {/*<div className="time floatLeft">*/}
                            {/*    {new Date()}*/}
                            {/*</div>*/}
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
                            <Link to={"/"} className="header_logo-item">
                                <StaticImage
                                    src="../../images/logonew.png"
                                    loading="eager"
                                    placeholder="none"
                                    imgClassName="team_img"
                                    className="team_block"
                                    alt="logo"
                                />
                            </Link>
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

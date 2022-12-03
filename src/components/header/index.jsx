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
                                <img src="data:image/png;base64,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" alt=""/>
                                {/*<StaticImage*/}
                                {/*    src="../../images/logonew.png"*/}
                                {/*    loading="eager"*/}
                                {/*    placeholder="none"*/}
                                {/*    imgClassName="team_img"*/}
                                {/*    className="team_block"*/}
                                {/*    alt="logo"*/}
                                {/*/>*/}
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

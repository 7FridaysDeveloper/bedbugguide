import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import ThemeContext from "src/context/theme-context";
import AnimateHeight from "react-animate-height";
import HeaderMenu from "src/components/header/header-menu";
//import ThePhone from "src/components/the-phone";
import AnimatedUnderlineMenu from "src/components/header/animated-underline-menu";
//import Sticky from "react-sticky-el";
import { Helmet } from "react-helmet";
import Moment from 'moment';
import { StaticImage} from "gatsby-plugin-image";


//import LogoSvg from "src/images/logonew.png";
//import CloseSvg from "src/images/svg/close.svg";
import MenuSvg from "src/images/svg/menu.svg";
import SearchSvg from "src/images/svg/search.svg";

import "./style.css";

const Header = ({ path }) => {
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

    useEffect(() => {
        setOpenMobileMenu(false);
    }, [path]);

    const time = Moment().format('dddd MMM Do YYYY');

    return (
        <>
            <Helmet>
                <script type="text/javascript">
                    {`
             if(window) {
                window.addEventListener('scroll',() => {
                console.log('end: load');
                  setTimeout(function(){
                      console.log('timeout: load')
                      const t=document.createElement('script');
                      t.src="https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GTAG_ID}";
                      document.head.appendChild(t);
                      
                      window.dataLayer = window.dataLayer || []
                      window.gtag = function gtag() { window.dataLayer.push(arguments) }
                      gtag('js', new Date())
                      gtag('config', '${process.env.GATSBY_GTAG_ID}', { send_page_view: false })
                      window.gtag("event", "View Page", {
                        event_category: "Category Page",
                        event_label: window.location.pathname,
                      });
                  }, 1000);
                }, {once: true})
              }
          `}
                </script>
            </Helmet>
            <header ref={headerRef}>
                <div className="fixing">
                    <div className="top-header">
                        <div className="container-fluid-custom container">
                            <div className="time floatLeft">
                                {time}
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
                            <Link to={"/"} className="header_logo-item">
                                <StaticImage
                                    src="https://www.bedbugguide.com/wp-content/uploads/2016/07/logonew.png"
                                    alt="bg"
                                    loading="eager"
                                    placeholder="none"
                                />
                            </Link>

                            <div className="header-search">
                                <SearchSvg />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

Header.propTypes = {
    path: PropTypes.string.isRequired,
};
export default Header;

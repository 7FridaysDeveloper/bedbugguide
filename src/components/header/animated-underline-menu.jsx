import React, { useState, useEffect } from "react";
import {useLocation} from '@reach/router';
import HeaderMenu from "src/components/header/header-menu";

const css = {
    top: "-26px",
    position: "absolute",
    width: "100%",
    height: "5px",
    background: "var(--hover_color)",
    transition: "0.5s",
};
const AnimatedUnderlineMenu = () => {
    const { pathname } = useLocation();
    const [options, setOptions] = useState({
        width: null,
        left: null,
    });
    const mouseEnter = (left, width) => {
        setOptions({
            left,
            width,
        });
    };

    const activeItemLink = () => {
        const linkActive = document.querySelector(".menu-item-active");

        if (!linkActive) return;
        setOptions({
            left: linkActive.offsetLeft + linkActive.closest("li").offsetLeft,
            width: linkActive.offsetWidth,
        });
    };
    useEffect(() => {
        setTimeout(() => {
            activeItemLink();
        }, 0);
    }, [pathname]);
    return (
        <>
            <HeaderMenu onMouseEnter={mouseEnter} onMouseLeave={activeItemLink}/>
            {options.width ? (
                <span className="underline" style={{ ...css, ...options }}></span>
            ) : null}
        </>
    );
};

export default AnimatedUnderlineMenu;
import React from "react";
import './style.css';

export default function ModalReact ({ src , close }) {
    return (
        <div onClick={() => close(false)} className="modal-photo">
            <div className="wrap">
                <div className="close">&#10005;</div>
                <img srcSet={src} alt=""/>
            </div>
        </div>
    )
}
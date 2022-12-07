import React, {useContext, useRef} from "react";
import {navigate} from 'gatsby';
import ThemeContext from "../../context/theme-context";

import './style.css';

const Modal = () => {
    const theme = useContext(ThemeContext);

    const closeModal = () => theme.dispatch({type: 'modelSearch', payload: false})

    const inputSearch = useRef(null);
    const searchPosts = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (inputSearch.current.value?.trim() !== '') {
            navigate(`/?s=${inputSearch.current.value}`);
            closeModal()
        }

    }
    return (
        <div className="modal-wrap" id="search-full">
            <div className="overlay"></div>
            <div className="container" onClick={closeModal}>
                <div className="form-group" onClick={(e) => e.stopPropagation()}>
                    <form action="" onSubmit={searchPosts}>
                        <input type="text" id="s" className="search-field" placeholder="Search..." name="s"
                               ref={inputSearch}/>
                        <input type="submit" className="search-submit" value="Search"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;
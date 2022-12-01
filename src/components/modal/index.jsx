
import React from "react";
import './style.css';

const Modal = () => {
    return(
        <div className="modal-wrap" id="search-full">
           <div className="overlay"></div>

            <div className="container">
                <div className="form-group">
                    <form action="">
                        <input type="text" id="s" className="search-field" placeholder="Search..." name="s" />
                        <input type="submit" className="search-submit" value="Search" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;
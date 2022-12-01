import React from "react";
import './style.css';

const Comments = () => {
    return(
        <div className="comments">
            <div className="container">
                <h2>16 COMMENTS</h2>
                <div className="line"></div>
                <div className="item">
                    <div className="date">1 Jan, 6:28 pm</div>
                    <h5 className="name">Isabelle</h5>
                    <div className="text">
                        How do I know if I my bed has bedbugs?
                    </div>
                </div>
                <div className="item">
                    <div className="date">1 Jan, 6:28 pm</div>
                    <h5 className="name">Isabelle</h5>
                    <div className="text">
                        How do I know if I my bed has bedbugs?
                    </div>
                </div>
                <div className="item">
                    <div className="date">1 Jan, 6:28 pm</div>
                    <h5 className="name">Isabelle</h5>
                    <div className="text">
                        How do I know if I my bed has bedbugs?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;
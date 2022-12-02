import React from "react";
import './style.css';

const Comments = ({ count = '0' }) => {
    console.log(count, 'count')
    if (count === '0') return null;
    return(
        <div className="comments comments-list">
                <h2>{count} COMMENTS</h2>
                <div className="line"></div>
                {/*<div className="item">*/}
                {/*    <div className="date">1 Jan, 6:28 pm</div>*/}
                {/*    <h5 className="name">Isabelle</h5>*/}
                {/*    <div className="text">*/}
                {/*        How do I know if I my bed has bedbugs?*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="item">*/}
                {/*    <div className="date">1 Jan, 6:28 pm</div>*/}
                {/*    <h5 className="name">Isabelle</h5>*/}
                {/*    <div className="text">*/}
                {/*        How do I know if I my bed has bedbugs?*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="item">*/}
                {/*    <div className="date">1 Jan, 6:28 pm</div>*/}
                {/*    <h5 className="name">Isabelle</h5>*/}
                {/*    <div className="text">*/}
                {/*        How do I know if I my bed has bedbugs?*/}
                {/*    </div>*/}
                {/*</div>*/}
        </div>
    )
}

export default Comments;
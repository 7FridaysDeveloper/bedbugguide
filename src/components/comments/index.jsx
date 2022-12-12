import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import parse from "html-react-parser";
import dayjs from "dayjs";

import './style.css';

const Comments = ({ count = '0', id }) => {
    if (count === '0') return null;

    const [comments, setComments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hideShowMore, setHideShowMore] = useState(true);

    useEffect(() => {
        fetch(`${process.env.GATSBY_API_URL}/comments?post=${id}&per_page=100`)
            .then(res => {
                if(Number(res.headers.get('x-wp-totalpages')) === currentPage) {
                    setHideShowMore(false);
                }
                setLoading(false);
                return res.json();
            })
            .then((data) => setComments([...comments, ...data].reverse()))
    }, [currentPage]);

    const showMoreComments = () => {
        setLoading(true);
        setCurrentPage(2);
    }

    return(
        <div className="comments comments-list">
                <h2>{count} COMMENTS</h2>
                <div className="line"></div>
                {comments.map(comment => (
                    <div className="item" key={comment.id}>
                        <div className="date">{dayjs(comment.date).format('D MMM, h:s A')}</div>
                        <h5 className="name">{comment.author_name}</h5>
                        <div className="text">
                            {parse(comment.content?.rendered || '')}
                        </div>
                    </div>
                ))}

            {loading ? <ClipLoader /> : hideShowMore ? <button onClick={showMoreComments}>Show More</button> : null }
        </div>
    )
}

export default Comments;
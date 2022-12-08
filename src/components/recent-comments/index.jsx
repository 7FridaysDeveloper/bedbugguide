import React, { useEffect, useState } from "react";
//import ClipLoader from "react-spinners/ClipLoader";
import {Link} from "gatsby";
import parse from "html-react-parser";

import './style.css';

const RecentComments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(process.env.GATSBY_API_URL+'/comments?per_page=5&_embed=1')
            .then(res => res.json())
            .then(comm => {
                setComments(comm.map(item => ({
                    author_name: item.author_name,
                    id: item.id,
                    postTitle: item?._embedded?.up[0]?.title?.rendered || '',
                    uri: item.link.replace(process.env.GATSBY_URL, '')
                })))
            })
    }, []);
    return(
        <div className="recent-comments">
            <h4>RECENT COMMENTS</h4>
            <div className="line"></div>
            {comments.map(comm => (
                <div className="flex-box" key={comm.id}>
                    <span>{parse(comm.author_name || '')} on </span>
                    <Link to={comm.uri}>{parse(comm.postTitle || '')}</Link>
                </div>
            ))}
        </div>
    )
}

export default React.memo(RecentComments);
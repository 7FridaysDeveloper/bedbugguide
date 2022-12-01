import React from "react";
import {Link} from "gatsby";
import './style.css';

import CalendarSvg from "src/images/svg/calendar.svg";
import ViewSvg from "src/images/svg/visible.svg";
import CommentSvg from "src/images/svg/comment.svg";


const Statistic = ({author, date}) => {
    return(
        <div className="single-statistic">
            <div className="author">
                <Link to={author.uri}>{author.name}</Link>
            </div>
            <div className="date">
                <CalendarSvg />
                {date}
            </div>
            <div className="views">
                <ViewSvg />
                322
            </div>
            <div className="comments">
                <CommentSvg />
                0 Comments
            </div>
        </div>
    )
}

export default Statistic;
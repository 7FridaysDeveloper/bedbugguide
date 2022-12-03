import React from "react";
import CalendarSvg from "src/images/svg/calendar.svg";
import ViewSvg from "src/images/svg/visible.svg";
import CommentSvg from "src/images/svg/comment.svg";

import './style.css';

const Statistic = ({author, date, postSettings}) => {

    return (
        <div className="single-statistic">
            <div className="author">
                <a href={author.uri}>{author.name}</a>
            </div>
            <div className="date">
                <CalendarSvg/>
                {date}
            </div>
            <div className="views">
                <ViewSvg/>
                {postSettings === null ? 'loading ....' : `${postSettings?.view}`}
            </div>
            <div className="comments">
                <CommentSvg/>
                {postSettings === null ? 'loading ....' : `${postSettings?.comment_count} Comments`}
            </div>
        </div>
    )
}

export default Statistic;
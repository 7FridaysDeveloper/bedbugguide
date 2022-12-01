import React from "react";
import './style.css';
import CalendarSvg from '../../images/svg/calendar.svg'


const RelatedPosts = () => {
    return (
        <div className="related-post wrapper-items">
            <h4>Related Posts</h4>
            <div className="line"></div>
            <div className="grid-box-post">
                <div className="post-cat">
                    <div className="post-category">
                        <a href="https://www.bedbugguide.com/category/general-information/">general
                            information</a>
                        <a href="https://www.bedbugguide.com/category/general-information/">cat 2</a>
                    </div>
                    <h3 className="post-title"><a
                        href="https://www.bedbugguide.com/pictures-of-adult-bed-bugs/">Pictures Of Adult
                        Bed Bugs</a>
                    </h3>
                    <div className="entry-meta">
                        <span className="author">
                            <a href="http://bedbugguide.a-max.uk/author/admin/">BedBugGuide</a>
                        </span>
                        <span className="date">
                           <CalendarSvg/> Apr 27th, 2018</span>
                    </div>
                </div>
                <div className="post-cat">
                    <div className="post-category">
                        <a href="https://www.bedbugguide.com/category/general-information/">general
                            information</a>
                    </div>
                    <h3 className="post-title"><a
                        href="https://www.bedbugguide.com/pictures-of-adult-bed-bugs/">Pictures Of Adult
                        Bed Bugs</a>
                    </h3>
                    <div className="entry-meta">
                        <span className="author">
                            <a href="http://bedbugguide.a-max.uk/author/admin/">BedBugGuide</a>
                        </span>
                        <span className="date">
                           <CalendarSvg/> Apr 27th, 2018</span>
                    </div>
                </div>
            </div>
        </div>






    );
};

export default RelatedPosts;
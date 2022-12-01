import React from "react";
import parse from "html-react-parser";
import SingleCategory from "../single-category";
import Statistic from "../single-statistic";
import Tags from "../tags";
import PrevNextPost from "../prev-next-post";
import RelatedPosts from "../related-posts";
import AddComments from "../add-comments";

const SinglePost = (props) => {
    return (
        <div className="left-content">
            <SingleCategory categories={props.data?.post?.categories?.nodes} />
            <h1 className="post-title">{props.data?.post?.title}</h1>
            <div className="line"></div>
            <Statistic author={props.data?.post?.author?.node} date={props.data?.post?.date} />
            <div className="text-content">{parse(props.data?.post?.content || '')}</div>
            <Tags tags={props.data.post.tags}/>
            <div className="share">
                <p>Does anyone you know battle with bed bugs? Share us with them:</p>
                <div className="line black"></div>
            </div>
            <PrevNextPost previous={props.data?.previous} next={props.data?.next} />
            <RelatedPosts />
            <AddComments />
        </div>
    )
}

export default SinglePost;
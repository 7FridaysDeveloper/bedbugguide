import React, {useEffect, useState, useRef} from "react";
import parse from "html-react-parser";
import SingleCategory from "../single-category";
import Statistic from "../single-statistic";
import Tags from "../tags";
import PrevNextPost from "../prev-next-post";
import RelatedPosts from "../related-posts";
import AddComments from "../add-comments";
import Comments from "../comments";
import YouTubeLazy from "../youtube";
import {youtubeParser} from '../../util/helpers'
import SharePage from "../share-page";
import ModalImg from "../modal-img/index"

//eslint-disable-next-line
const regex = new RegExp(/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);


function replaceNbsps(str) {
    const re = new RegExp(String.fromCharCode(160), "g");
    return str.replace(re, " ");
}
const SinglePost = (props) => {
    const [postSettings, setPostSettings] = useState(null);
    const postBodyRef = useRef(null);
    const [isOpenModalImg, setIsOpenModalImg] = useState('');

    useEffect(() => {
        fetch(`${process.env.GATSBY_URL}/wp-json/posts-view/v1/${props.data?.post?.databaseId}`)
            .then(res => res.json())
            .then(setPostSettings);

        setTimeout(() => {
            fetch(`${process.env.GATSBY_URL}/wp-json/set-posts-view/v1/${props.data?.post?.databaseId}`)
                .catch(console.log)
        }, 1000)

    }, [])

    const openModalImg = (e) => {
        const target = e.target;
        if(target.parentNode?.nodeName === 'A' && target.parentNode?.href.match(regex)) return;
        e.preventDefault();
        const srcset = target.closest('[data-gatsby-image-wrapper]')?.querySelector('div > img:not([role="presentation"])')?.srcset;
        const img = srcset ? srcset : target.src;
        if(img) {
            setIsOpenModalImg(img)
        }
    }

    useEffect(() => {
        postBodyRef.current.addEventListener('click', openModalImg, false)
        return () =>  postBodyRef.current.removeEventListener('click', openModalImg, false)
    }, [])
    return (
        <div className="left-content">
            {isOpenModalImg ? <ModalImg src={isOpenModalImg} close={setIsOpenModalImg} /> : null }
            <SingleCategory categories={props.data?.post?.categories?.nodes}/>
            <h1 className="post-title">{props.data?.post?.title}</h1>
            <div className="line"></div>
            <Statistic author={props.data?.post?.author?.node} date={props.data?.post?.date}
                       postSettings={postSettings}/>
            <div className="text-content" ref={postBodyRef}>{parse(props.data?.post?.content || '', {
                replace: domNode => {
                    if (domNode.name === 'iframe' && youtubeParser(domNode.attribs.src)) {
                        return (
                            <YouTubeLazy
                                videoId={youtubeParser(domNode.attribs.src)}
                                style={{height: domNode.attribs.height+'px', width: domNode.attribs.width+'px'}}
                            />
                        )
                    }
                    if(domNode.type === 'text') {
                        domNode.nodeValue = replaceNbsps(domNode.nodeValue);
                        return domNode;
                    }
                }
            })}</div>
            <Tags tags={props.data.post.tags}/>
            <SharePage image={props.data?.post?.featuredImage} title={props.data?.post?.title} slug={props.data?.post?.uri} />
            <PrevNextPost previous={props.data?.previous} next={props.data?.next}/>
            <RelatedPosts posts={props.data.post?.related_posts}/>
            {props.data.post.commentStatus === 'open' ?
                <>
                    <Comments count={postSettings?.comment_count} id={props.data?.post.databaseId}/>
                    <AddComments id={props.data?.post.databaseId}/>
                </>
                : null}

        </div>
    )
}

export default SinglePost;
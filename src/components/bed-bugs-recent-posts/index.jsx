import React from "react";
import './style.css';
import {graphql, useStaticQuery} from "gatsby";
//import FeaturedImage from "../posts/featured-image";

import SvgCalendar from '../../images/svg/calendar.svg';

const BedBugsPosts = () => {
    const data = useStaticQuery(graphql`
    query BedBugsPosts {
      allWpPost(
        filter: {categories: {nodes: {elemMatch: {slug: {eq: "get-rid-of-bed-bugs"}}}}}
        limit: 5
      ) {
       nodes {
          id
          title
          uri
          author {
            node {
              id
              name
              uri
            }
          }
          date(formatString: "MMM D, YYYY")
           categories {
            nodes {
              uri
              name
            }
          }
        }
      }
    }
  `);

    const categoryName = {name: data.allWpPost?.nodes[0]?.categories?.nodes[0].name , slug: data.allWpPost?.nodes[0]?.categories?.nodes[0]?.uri};
    const dateCategory = data.allWpPost?.nodes[0]?.date;
    const authorName = {name: data.allWpPost?.nodes[0]?.author?.node?.name , slug: data.allWpPost?.nodes[0]?.author?.node?.uri};

    return(
        <div className="bed-bugs-posts">
            <h4>GET RID OF BED BUGS RECENT POSTS</h4>
            <div className="line"></div>
            <div className="flex-box">
                {data.allWpPost.nodes.map(
                    ({title , uri } , index) => (
                         <div className="item"  key={index}>
                             {index === 0 ?
                                 <div className="wrap">
                                     <div className="cat">
                                         <a href={categoryName.slug} >{categoryName.name}</a>
                                     </div>
                                     <h3><a href={uri} >{title}</a></h3>
                                     <div className="flex">
                                         <div className="author"><a href={authorName.slug} >{authorName.name}</a></div>
                                         <div className="date">
                                            <SvgCalendar/>
                                            {dateCategory}
                                         </div>
                                     </div>
                                 </div>
                                 :
                                 <div className="wrap">
                                     <h3><a href={uri} >{title}</a></h3>
                                 </div>
                             }
                         </div>
                    )
                )}
            </div>
        </div>
    )
}

export default BedBugsPosts;
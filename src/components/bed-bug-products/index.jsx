import React from "react";
import {graphql, useStaticQuery, Link} from "gatsby";
import SvgCalendar from "../../images/svg/calendar.svg";
import './style.css';

const BedBugProduct = () => {
    const data = useStaticQuery(graphql`
    query BedBugsProducts {
      allWpPost(
        filter: {categories: {nodes: {elemMatch: {slug: {eq: "bed-bug-products"}}}}}
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
        <div className="bed-bugs-products">
            <h4>GET RID OF BED BUGS RECENT POSTS</h4>
            <div className="line"></div>
            <div className="flex-box">
                {data.allWpPost.nodes.map(
                    ({title , uri } , index) => (
                        <div className="item"  key={index}>
                            {index === 0 ?
                                <div className="wrap">
                                    <div className="cat">
                                        <Link to={categoryName.slug} >{categoryName.name}</Link>
                                    </div>
                                    <h3><Link to={uri} >{title}</Link></h3>
                                    <div className="flex">
                                        <div className="author"><Link to={authorName.slug} >{authorName.name}</Link></div>
                                        <div className="date">
                                            <SvgCalendar/>
                                            {dateCategory}
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="wrap">
                                    <h3><Link to={uri} >{title}</Link></h3>
                                </div>
                            }
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default BedBugProduct;
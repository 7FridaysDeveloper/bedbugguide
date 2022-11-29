import React from "react";
import './style.css';
import {Link} from "gatsby";



const SingleCategory = (categories) => {
    return(
        <div className="category-post">
            {categories.categories.map(
                ({name , uri } , index) => (
                    <Link to={uri} key={index}>
                        {name}
                        {/*{index === categories.categories.length ? ' , ' : ' '}*/}
                    </Link>
                )
            )}
        </div>
    )
}

export default SingleCategory;

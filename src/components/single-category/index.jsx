import React from "react";
import './style.css';

const SingleCategory = (categories) => {
    return (
        <div className="category-post">
            {categories.categories.map(
                ({name, uri}, index) => (
                    <a href={uri} key={index}>
                        {name}
                        {/*{index === categories.categories.length ? ' , ' : ' '}*/}
                    </a>
                )
            )}
        </div>
    )
}

export default SingleCategory;

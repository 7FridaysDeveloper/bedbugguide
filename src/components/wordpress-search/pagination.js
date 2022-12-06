import React from "react";
//import ArrowPagination from "../../images/svg/arrow-right.svg";
import PaginationJs from "react-js-pagination";
import {navigate} from 'gatsby';

import "../pagination/style.css";

const Pagination = ({ currentPage, totalPage, postsPerPage, search }) => {
    const handlePageClick = async (page) => {
        const routeTo = page > 1 ?  `${path}page/${page}${search}` : path || '/';
        await navigate(routeTo);
    };
    return (
        <div className="pagination-wrapper">
            <div className="container">
                {totalPage > 1 ? (
                    <PaginationJs
                        //nextPageText={<ArrowPagination />}
                        hideFirstLastPages={true}
                        //prevPageText={<ArrowPagination style={{ transform: "rotate(180deg)" }} />}
                        innerClass="wrap"
                        itemClass="list"
                        onChange={handlePageClick}
                        activeClass="active"
                        itemsCountPerPage={postsPerPage}
                        totalItemsCount={Math.ceil(postsPerPage * totalPage)}
                        activePage={currentPage}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default Pagination;
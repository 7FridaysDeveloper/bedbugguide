import React from "react";
//import ArrowPagination from "../../images/svg/arrow-right.svg";
import PaginationJs from "react-js-pagination";
import {navigate} from 'gatsby';

import "./style.css";

const Pagination = ({ currentPage, totalPage, postsPerPage, path = '/', changePagination}) => {
    const handlePageClick = async (page) => {

        if(changePagination === null) {
            const routeTo = page > 1 ?  `${path}page/${page}` : path || '/';
            await navigate(routeTo);
        } else {
            changePagination(page);
        }

    };
    return (
        <div className="pagination-wrapper">
            <div className="container">
                <div className="flex-pagination">
                    {totalPage > 1 ? <div className="list">Page {currentPage} of {totalPage} </div> : null}
                    {totalPage > 1 ? (
                        <PaginationJs
                           //nextPageText={<ArrowPagination />}
                            lastPageText={'Last »'}
                            firstPageText={'« First'}
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
        </div>
    );
};

export default Pagination;
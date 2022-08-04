
import React from 'react';
import classes from './Pagination.module.scss';
import ReactPaginate from "react-paginate";


function Pagination({onPageChange}) {
  return (
    <div className={classes.root}>
      <ReactPaginate
        className={classes.pagination}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={onPageChange}
        pageRangeDisplayed={8}
        pageCount={5}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;

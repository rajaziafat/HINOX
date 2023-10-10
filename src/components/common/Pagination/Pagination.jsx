import React from "react";
import clsx from "clsx";

import { usePagination, DOTS } from "hooks/usePagination";

import classes from "./Pagnination.module.css";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={clsx("pagination-container", classes.pagination, {
        [className]: className,
      })}
    >
      <li
        className={clsx(
          classes.paginationItem,
          currentPage === 1 && classes.disabled
        )}
        onClick={onPrevious}
      >
        <div className={clsx(classes.arrow, classes.left)} />
      </li>
      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={"pag-dot-" + idx}
              className={clsx(classes.paginationItem, "pagination-item dots")}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={clsx(
              classes.paginationItem,
              pageNumber === currentPage && classes.active
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={clsx(
          classes.paginationItem,
          currentPage === lastPage && classes.disabled
        )}
        onClick={onNext}
      >
        <div className={clsx(classes.arrow, classes.right)} />
      </li>
    </ul>
  );
};

export default Pagination;

import { PaginationFilter } from "./PaginationFilter";
import { Pagination } from "./Pagination";
import "./PaginationBar.css";
import { useState } from "react";

export const PaginationBar = ({ totalRecords, getParameters }) => {
  const [limitSize, setLimitSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const pagination = Math.ceil(totalRecords / Number(limitSize));
  let count = 0;
  let pages = [];

  for (var i = 0; i < pagination; i++) {
    count = count + 1;
    pages.push(count);
  }

  console.log("pages :", pages, pageNo);

  return (
    <div className="pagination-bar">
      <div className="pagination-filter-outer">
        <PaginationFilter getLimitSize={(limit) => setLimitSize(limit)} />
      </div>
      <div className="pagination-bar-padding"></div>
      <div className="pagination-outer">
        <Pagination pages={pages} getPageNo={(page) => setPageNo(page)} />
      </div>
    </div>
  );
};

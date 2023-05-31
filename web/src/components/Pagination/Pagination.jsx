import "./Pagination.css";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

export const Pagination = ({ pages, getPageNo }) => {
  const handleClick = (page) => {
    getPageNo(page);
  };
  return (
    <div className="pagination-inner">
      <button className="back-btn">
        <IoChevronBackOutline size={15} />
      </button>
      <>
        {pages.map((page) => {
          return (
            <button
              key={page}
              className={"pageno"}
              onClick={(page) => handleClick(page)}
            >
              {page}
            </button>
          );
        })}
      </>

      {/* <span className="pageno-dot">...</span>

      <span className="pageno-dot">...</span> */}

      <button className="forward-btn">
        <IoChevronForwardOutline size={15} />
      </button>
    </div>
  );
};

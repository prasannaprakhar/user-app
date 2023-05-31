import "./PaginationFilter.css";

export const PaginationFilter = ({ getLimitSize }) => {
  const filterOptions = [10, 15, 20];

  const handleChange = (event) => {
    getLimitSize(event.target.value);
  };

  return (
    <div className="pagination-filter">
      <span className="limit">Limit</span>
      <select
        className="pagination-menu"
        onChange={(event) => handleChange(event)}
      >
        {filterOptions.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

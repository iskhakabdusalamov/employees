import "../Search/SearchAndFiltering.css";

const SearchPanel = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className="form-control search-input"
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
      placeholder="Найти сотрудника"
      type="text"
    />
  );
};

export default SearchPanel;

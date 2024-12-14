import "./searchEmp.css";

const SearchEmp = ({ searchValue, setSearchValue }) => {
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

export default SearchEmp;

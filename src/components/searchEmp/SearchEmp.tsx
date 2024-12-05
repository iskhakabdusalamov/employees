import "./searchEmp.css";

interface SearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchEmp: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
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

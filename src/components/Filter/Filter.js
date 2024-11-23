import "../Filter/Filter.css";

const Filter = (props) => {
  const buttonsData = [
    {
      name: "all",
      label: "Все сотрудники",
    },
    {
      name: "rise",
      label: "На повышение",
    },
    {
      name: "moreThen1000",
      label: "З/П больше 1000$",
    },
  ];
  return (
    <div className="btn-group">
      {buttonsData.map(({ name, label }) => (
        <button
          key={name}
          onClick={() => props.onFilterSelect(name)}
          className={`btn ${
            props.filter === name ? "btn-light" : "btn-outline-light"
          }`}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Filter;

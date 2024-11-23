import "../ListItem/ListItem.css";

const ListItem = ({
  name,
  salary,
  increase,
  rise,
  onToggleIncrease,
  onToggleRise,
  deleteItem,
}) => {
  let classes = "list-group-item d-flex justify-content-between";
  if (increase) {
    classes += " increase";
  }
  if (rise) {
    classes += " like";
  }

  return (
    <li className={classes}>
      <span onClick={onToggleRise} className="list-group-item-label">
        {name}
      </span>
      <input
        className="list-group-item-input"
        defaultValue={salary + "$"}
        type="text"
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onToggleIncrease}
          className="btn-cookie btn-sm "
          type="button"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button
          onClick={deleteItem}
          className="btn-trash btn-sm "
          type="button"
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default ListItem;

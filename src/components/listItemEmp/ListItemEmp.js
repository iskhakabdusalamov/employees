import "../listItemEmp/listItemEmp.css";

const ListItemEmp = ({
  name,
  salary,
  increase,
  rise,
  onToggleIncrease,
  onToggleRise,
  deleteItem,
}) => {
  let classes = "list-group-item";
  if (increase) {
    classes += " increase";
  }
  if (rise) {
    classes += " like";
  }

  return (
    <li className={classes}>
      <span onClick={onToggleRise} className="name">
        {name}
      </span>
      <span className="salary">{salary + "$"}</span>
      <div className="buttons">
        <button className="cookie button" onClick={onToggleIncrease}>
          <span className="fas fa-cookie"></span>
        </button>
        <button className="trash button" onClick={deleteItem}>
          <span className="fas fa-trash"></span>
        </button>
        <span className="fas fa-star"></span>
      </div>
    </li>
  );
};

export default ListItemEmp;

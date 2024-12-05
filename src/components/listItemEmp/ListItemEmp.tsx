import "./listItemEmp.css";

interface ListItemProps {
  name: string;
  salary: number;
  increase: boolean;
  rise: boolean;
  onToggleIncrease: () => void;
  onToggleRise: () => void;
  deleteItem: () => void;
}

const ListItemEmp: React.FC<ListItemProps> = ({
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
        <button onClick={onToggleIncrease} className="button сookieColor">
          <i className="fas fa-cookie"></i>
        </button>
        <button onClick={deleteItem} className="button trashColor">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default ListItemEmp;

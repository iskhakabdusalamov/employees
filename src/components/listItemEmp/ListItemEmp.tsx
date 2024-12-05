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
          <span className="fas fa-cookie"></span>
        </button>
        <button onClick={deleteItem} className="button trashColor">
          <span className="fas fa-trash"></span>
        </button>
        <span className="fas fa-star"></span>
      </div>
    </li>
  );
};

export default ListItemEmp;

import "./listEmp.css";
import ListItemEmp from "../listItemEmp/ListItemEmp";

const ListEmp = ({ data, onToggleIncrease, onToggleRise, deleteItem }) => {
  return (
    <ul className="listEmp list-group">
      {data.map((item) => (
        <ListItemEmp
          key={item.id}
          {...item}
          onToggleIncrease={() => onToggleIncrease(item.id)}
          onToggleRise={() => onToggleRise(item.id)}
          deleteItem={() => deleteItem(item.id)}
        />
      ))}
    </ul>
  );
};

export default ListEmp;

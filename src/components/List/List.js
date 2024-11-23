import ListItem from "../ListItem/ListItem";

import "../List/List.css";

const EmployeesList = ({
  data,
  deleteItem,
  onToggleRise,
  onToggleIncrease,
}) => {
  return (
    <ul className="app-list list-group">
      {data.map((item) => (
        <ListItem
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

export default EmployeesList;

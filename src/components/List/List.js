import ListItem from "../ListItem/ListItem";

import "../List/List.css";

const List = ({ data, onToggleIncrease, onToggleRise, deleteItem }) => {
  return (
    <ul className="list list-group">
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

export default List;

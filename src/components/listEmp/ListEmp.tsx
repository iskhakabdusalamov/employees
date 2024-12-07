import "./listEmp.css";
import ListItemEmp from "../listItemEmp/ListItemEmp";

interface Employee {
  id: number;
  name: string;
  salary: number;
  increase: boolean;
  rise: boolean;
}

interface ListProps {
  data: Employee[];
  onToggleIncrease: (id: number) => void;
  onToggleRise: (id: number) => void;
  deleteItem: (id: number) => void;
}

const ListEmp: React.FC<ListProps> = ({
  data,
  onToggleIncrease,
  onToggleRise,
  deleteItem,
}) => {
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

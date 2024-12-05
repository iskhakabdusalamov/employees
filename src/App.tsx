import React from "react";
import Header from "./components/header/Header";
import SearchEmp from "./components/searchEmp/SearchEmp";
import EmpFilter from "./components/empFilter/EmpFilter";
import ListEmp from "./components/listEmp/ListEmp";
import AddEmp from "./components/addEmp/AddEmp";

interface Employee {
  name: string;
  salary: number;
  increase: boolean;
  rise: boolean;
  id: number;
}

const App: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [filter, setFilter] = React.useState<string>("all");
  const [data, setData] = React.useState<Employee[]>([
    { name: "John C.", salary: 800, increase: false, rise: true, id: 0 },
    { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 1 },
    { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 2 },
  ]);
  const [maxId, setMaxId] = React.useState<number>(3);

  const searchEmp = (data: Employee[], searchValue: string): Employee[] => {
    if (!searchValue) {
      return data;
    }
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filterPost = (data: Employee[], filter: string): Employee[] => {
    switch (filter) {
      case "rise":
        return data.filter((item) => item.rise);
      case "moreThen1000":
        return data.filter((item) => item.salary > 1000);
      default:
        return data;
    }
  };

  const filteredData = filterPost(searchEmp(data, searchValue), filter);

  const onToggleIncrease = (id: number): void => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        } else {
          return item;
        }
      })
    );
  };

  const onToggleRise = (id: number): void => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        } else {
          return item;
        }
      })
    );
  };

  const deleteItem = (id: number): void => {
    setData(data.filter((item) => item.id !== id));
  };

  const addItem = (name: string, salary: number): void => {
    const newItem: Employee = {
      name,
      salary,
      increase: false,
      rise: false,
      id: maxId,
    };
    setData([...data, newItem]);
    setMaxId(maxId + 1);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "50px auto" }}>
      <Header data={data} />
      <div className="searchEmp">
        <SearchEmp searchValue={searchValue} setSearchValue={setSearchValue} />
        <EmpFilter filter={filter} setFilter={setFilter} />
      </div>
      <ListEmp
        data={filteredData}
        onToggleIncrease={onToggleIncrease}
        onToggleRise={onToggleRise}
        deleteItem={deleteItem}
      />
      <AddEmp addItem={addItem} />
    </div>
  );
};

export default App;

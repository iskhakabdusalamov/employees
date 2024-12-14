import React from "react";
import Header from "./components/header/Header";
import SearchEmp from "./components/searchEmp/SearchEmp";
import FilterEmp from "./components/filterEmp/FilterEmp";
import ListEmp from "./components/listEmp/ListEmp";
import AddEmp from "./components/addEmp/AddEmp";

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [filter, setFilter] = React.useState("all");
  const [data, setData] = React.useState([
    { name: "John C.", salary: 800, increase: false, rise: true, id: 0 },
    { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 1 },
    { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 2 },
  ]);
  const [maxId, setMaxId] = React.useState(3);

  const searchEmp = (data, searchValue) => {
    if (!searchValue) return data;
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filterPost = (data, filter) => {
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

  const onToggleIncrease = (id) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) return { ...item, increase: !item.increase };
        return item;
      })
    );
  };

  const onToggleRise = (id) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) return { ...item, rise: !item.rise };
        return item;
      })
    );
  };

  const deleteItem = (id) => setData(data.filter((item) => item.id !== id));

  const addItem = (name, salary) => {
    const newItem = {
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
      <div className="search">
        <SearchEmp searchvalue={searchValue} setSearchValue={setSearchValue} />
        <FilterEmp filter={filter} setFilter={setFilter} />
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

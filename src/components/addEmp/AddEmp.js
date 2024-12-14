import React from "react";
import "./addEmp.css";

const AddEmp = ({ addItem }) => {
  const [name, setName] = React.useState("");
  const [salary, setSalary] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 1 || !salary) return;
    addItem(name, salary);
    setName("");
    setSalary("");
  };

  return (
    <div className="add">
      <h3>Добавьте нового сотрудника</h3>
      <form className="addForm d-flex" onSubmit={onSubmit}>
        <input
          className="form-control new-post-label addInput"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Как его зовут?"
          type="text"
        />
        <input
          className="form-control new-post-label addInput"
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
          placeholder="З/П в $?"
          type="number"
        />
        <button className="btn btn-outline-light" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddEmp;

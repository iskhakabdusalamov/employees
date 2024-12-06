import "./addEmp.css";
import React from "react";

interface AddProps {
  addItem: (name: string, salary: number) => void;
}

const AddEmp: React.FC<AddProps> = ({ addItem }) => {
  const [name, setName] = React.useState<string>("");
  const [salary, setSalary] = React.useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const salaryNumber = Number(salary);

    if (name.trim().length < 1 || isNaN(salaryNumber) || salaryNumber <= 0)
      return;

    addItem(name, salaryNumber);
    setName("");
    setSalary("");
  };

  return (
    <div className="add">
      <h3>Добавьте нового сотрудника</h3>
      <form className="form" onSubmit={onSubmit}>
        <input
          className="form-control new-post-label input"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Как его зовут?"
          type="text"
        />
        <input
          className="form-control new-post-label input"
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

import "./header.css";

interface Employee {
  increase: boolean;
}

interface HeaderProps {
  data: Employee[];
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <div className="header">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {data.length}</h2>
      <h2>Премию получат: {data.filter((item) => item.increase).length}</h2>
    </div>
  );
};

export default Header;

import PageTitle from "./components/PageTitle/PageTitle";
import Input from "./components/Input/Input";
import DropDownButton from "./components/DropDownButton/DropDownButton";

import "./App.css";

function App() {
  return (
    <div className="todo-list-section">
      <div>
        <PageTitle text="TODO LIST" />
      </div>
      <div className="inputWrapper">
        <Input />
        <DropDownButton text="All" />
      </div>
    </div>
  );
}

export default App;

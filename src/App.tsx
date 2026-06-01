import PageTitle from "./components/PageTitle/PageTitle";
import Input from "./components/Input/Input";

import "./App.css";

function App() {
  return (
    <div className="todo-list-section">
      <div>
        <PageTitle text="TODO LIST" />
      </div>
      <div className="inputWrapper">
        <Input />
      </div>
    </div>
  );
}

export default App;

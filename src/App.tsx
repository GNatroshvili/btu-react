import PageTitle from "./components/PageTitle/PageTitle";
import Input from "./components/Input/Input";
import DropDownButton from "./components/DropDownButton/DropDownButton";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton";
import Note from "./components/Note/Note";

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
        <DarkModeButton />
      </div>
      <div className="notesContainer">
        <Note title="Note #1" />
        <Note title="Note #2" />
      </div>
    </div>
  );
}

export default App;

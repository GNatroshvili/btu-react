import PageTitle from "./components/PageTitle/PageTitle";
import Input from "./components/Input/Input";
import DropDownButton from "./components/DropDownButton/DropDownButton";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton";
import Note from "./components/Note/Note";
import AddButton from "./components/AddButton/AddButton";

import "./App.css";

function App() {
  const notes = ["Note #1", "Note #2", "Note #3"];

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
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note}
            showDivider={index !== notes.length - 1}
          />
        ))}
      </div>
      <AddButton />
    </div>
  );
}

export default App;

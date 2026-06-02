import { useState } from "react";
import PageTitle from "./components/PageTitle/PageTitle";
import Input from "./components/Input/Input";
import DropDownButton from "./components/DropDownButton/DropDownButton";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton";
import Note from "./components/Note/Note";
import AddButton from "./components/AddButton/AddButton";
import NewNoteModal from "./components/NewNoteModal/NewNoteModal";
import { useNotes } from "./hooks/useNotes";
import { useTheme } from "./hooks/useTheme";
import emptyImage from "./assets/empty.png";

import "./App.css";

function App() {
  const { notes, addNote, editNote, deleteNote, toggleNote } = useNotes();
  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const editingNote = notes.find((note) => note.id === editingId);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.trim().toLowerCase()),
  );

  const openAddModal = () => {
    setEditingId(null);
    setIsModalOpen(true);
  };

  const openEditModal = (id: string) => {
    setEditingId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleApply = (title: string) => {
    if (editingId) {
      editNote(editingId, title);
    } else {
      addNote(title);
    }
    closeModal();
  };

  return (
    <div className="todo-list-section">
      <div>
        <PageTitle text="TODO LIST" />
      </div>
      <div className="inputWrapper">
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        <DropDownButton text="All" />
        <DarkModeButton isDark={theme === "dark"} onToggle={toggleTheme} />
      </div>

      {notes.length === 0 ? (
        <div className="emptyState">
          <img src={emptyImage} alt="No notes yet" />
          <p className="emptyStateText">Empty...</p>
        </div>
      ) : filteredNotes.length === 0 ? (
        <p className="noResults">No notes match "{search}"</p>
      ) : (
        <div className="notesContainer">
          {filteredNotes.map((note, index) => (
            <Note
              key={note.id}
              title={note.title}
              completed={note.completed}
              showDivider={index !== filteredNotes.length - 1}
              onToggle={() => toggleNote(note.id)}
              onEdit={() => openEditModal(note.id)}
              onDelete={() => deleteNote(note.id)}
            />
          ))}
        </div>
      )}

      <AddButton onClick={openAddModal} />

      {isModalOpen && (
        <NewNoteModal
          onClose={closeModal}
          onApply={handleApply}
          initialValue={editingNote?.title ?? ""}
          title={editingId ? "EDIT NOTE" : "NEW NOTE"}
        />
      )}
    </div>
  );
}

export default App;

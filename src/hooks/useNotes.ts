import { useEffect, useState } from "react";

export type Note = {
  id: string;
  title: string;
  completed: boolean;
};

const STORAGE_KEY = "todo-notes";

const loadNotes = (): Note[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Note[]) : [];
  } catch {
    return [];
  }
};

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>(loadNotes);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const editNote = (id: string, title: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, title } : note))
    );
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const toggleNote = (id: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return { notes, addNote, editNote, deleteNote, toggleNote };
};

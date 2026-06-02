import { useState } from "react";
import styles from "./NewNoteModal.module.scss";

type Props = {
  onClose: () => void;
  onApply: (note: string) => void;
  initialValue?: string;
  title?: string;
};

const NewNoteModal = ({
  onClose,
  onApply,
  initialValue = "",
  title = "NEW NOTE",
}: Props) => {
  const [note, setNote] = useState(initialValue);

  const handleApply = () => {
    const trimmed = note.trim();
    if (!trimmed) return;
    onApply(trimmed);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>{title}</h2>

        <input
          type="text"
          className={styles.input}
          placeholder="Input your note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleApply()}
          autoFocus
        />

        <div className={styles.actions}>
          <button className={styles.cancel} onClick={onClose}>
            CANCEL
          </button>
          <button
            className={styles.apply}
            onClick={handleApply}
            disabled={!note.trim()}
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNoteModal;

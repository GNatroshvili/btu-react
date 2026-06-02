import { useState } from "react";
import styles from "./NewNoteModal.module.scss";

type Props = {
  onClose: () => void;
  onApply: (note: string) => void;
};

const NewNoteModal = ({ onClose, onApply }: Props) => {
  const [note, setNote] = useState("");

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>NEW NOTE</h2>

        <input
          type="text"
          className={styles.input}
          placeholder="Input your note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          autoFocus
        />

        <div className={styles.actions}>
          <button className={styles.cancel} onClick={onClose}>
            CANCEL
          </button>
          <button className={styles.apply} onClick={() => onApply(note)}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNoteModal;

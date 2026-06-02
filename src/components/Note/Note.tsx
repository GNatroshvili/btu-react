import styles from "./Note.module.scss";
import DividerLine from "../DividerLine/DividerLine";
import Checkbox from "../Checkbox/Checkbox";

type Props = {
  title: string;
  completed: boolean;
  showDivider?: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const Note = (props: Props) => {
  const { title, completed, showDivider = true, onToggle, onEdit, onDelete } =
    props;

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Checkbox checked={completed} onChange={onToggle} />
          <h3
            className={`${styles.title} ${completed ? styles.strikethrough : ""}`}
          >
            {title}
          </h3>
        </div>
        <div className={styles.buttons}>
          <button
            type="button"
            aria-label="Edit"
            className={`${styles.button} ${styles.editButton}`}
            onClick={onEdit}
          />
          <button
            type="button"
            aria-label="Delete"
            className={`${styles.button} ${styles.deleteButton}`}
            onClick={onDelete}
          />
        </div>
      </div>

      {showDivider && <DividerLine />}
    </div>
  );
};

export default Note;

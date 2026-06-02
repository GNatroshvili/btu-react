import { useState } from "react";
import styles from "./Note.module.scss";
import DividerLine from "../DividerLine/DividerLine";
import Checkbox from "../Checkbox/Checkbox";

type Props = {
  title: string;
  showDivider?: boolean;
};

const Note = (props: Props) => {
  const { title, showDivider = true } = props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Checkbox checked={isChecked} onChange={setIsChecked} />
          <h3
            className={`${styles.title} ${isChecked ? styles.strikethrough : ""}`}
          >
            {title}
          </h3>
        </div>
        <div className={styles.buttons}>
          <button
            type="button"
            aria-label="Edit"
            className={`${styles.button} ${styles.editButton}`}
          />
          <button
            type="button"
            aria-label="Delete"
            className={`${styles.button} ${styles.deleteButton}`}
          />
        </div>
      </div>

      {showDivider && <DividerLine />}
    </div>
  );
};

export default Note;

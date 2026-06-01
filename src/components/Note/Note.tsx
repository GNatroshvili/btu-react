import { useState } from "react";
import styles from "./Note.module.scss";
import DividerLine from "../DividerLine/DividerLine";
import Checkbox from "../Checkbox/Checkbox";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

type Props = {
  title: string;
};

const Note = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Checkbox checked={isChecked} onChange={setIsChecked} />
          <h3
            className={`${styles.title} ${isChecked ? styles.strikethrough : ""}`}
          >
            {props.title}
          </h3>
        </div>
        <div className={styles.buttons}>
          <img src={editIcon} alt="Edit" className={styles.button} />
          <img src={deleteIcon} alt="Delete" className={styles.button} />
        </div>
      </div>

      <DividerLine />
    </div>
  );
};

export default Note;

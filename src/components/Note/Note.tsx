import { useState } from "react";
import styles from "./Note.module.scss";
import DividerLine from "../DividerLine/DividerLine";
import Checkbox from "../Checkbox/Checkbox";

type Props = {
  title: string;
};

const Note = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Checkbox checked={isChecked} onChange={setIsChecked} />
        <h3
          className={`${styles.title} ${isChecked ? styles.strikethrough : ""}`}
        >
          {props.title}
        </h3>
      </div>
      <DividerLine />
    </div>
  );
};

export default Note;

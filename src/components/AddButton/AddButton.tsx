import styles from "./AddButton.module.scss";
import plusIcon from "../../assets/icons/plus.svg";

const AddButton = () => {
  return (
    <button className={styles.addButton}>
      <img src={plusIcon} alt="add-button" />
    </button>
  );
};

export default AddButton;

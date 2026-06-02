import styles from "./AddButton.module.scss";
import plusIcon from "../../assets/icons/plus.svg";

type Props = {
  onClick?: () => void;
};

const AddButton = ({ onClick }: Props) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <img src={plusIcon} alt="add-button" />
    </button>
  );
};

export default AddButton;

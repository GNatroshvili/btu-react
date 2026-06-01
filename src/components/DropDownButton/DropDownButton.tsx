import styles from "./DropDownButton.module.scss";
import chevronIcon from "../../assets/icons/chevron-top.svg";

type Props = {
  text: string;
};

const DropDownButton = (props: Props) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        {props.text}
        <img src={chevronIcon} alt="Dropdown Icon" className={styles.icon} />
      </button>
    </div>
  );
};

export default DropDownButton;

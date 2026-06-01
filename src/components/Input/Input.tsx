import styles from "./Input.module.scss";
import searchIcon from "../../assets/icons/search.svg";

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder = "Search note...", value, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <img src={searchIcon} className={styles.icon} alt="search" />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

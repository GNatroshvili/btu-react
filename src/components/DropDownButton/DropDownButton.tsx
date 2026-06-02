import { useState } from "react";
import styles from "./DropDownButton.module.scss";
import chevronIcon from "../../assets/icons/chevron-top.svg";

const options = ["All", "Complete", "Incomplete"];

type Props = {
  text: string;
};

const DropDownButton = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(props.text);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <img
          src={chevronIcon}
          alt="Dropdown Icon"
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
        />
      </button>

      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li
              key={option}
              className={`${styles.option} ${
                option === selected ? styles.optionSelected : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownButton;

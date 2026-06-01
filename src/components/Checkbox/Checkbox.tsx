import React from "react";
import styles from "./Checkbox.module.scss";
import checkIcon from "../../assets/icons/check.svg";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div
      className={`${styles.checkbox} ${checked ? styles.checked : ""}`}
      onClick={() => onChange(!checked)}
    >
      {checked && <img src={checkIcon} alt="checked" className={styles.icon} />}
    </div>
  );
};

export default Checkbox;

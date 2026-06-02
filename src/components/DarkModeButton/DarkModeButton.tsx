import styles from "./DarkModeButton.module.scss";
import moonIcon from "../../assets/icons/moon.svg";
import lightIcon from "../../assets/icons/light.svg";

type Props = {
  isDark: boolean;
  onToggle: () => void;
};

const DarkModeButton = ({ isDark, onToggle }: Props) => {
  return (
    <img
      src={isDark ? lightIcon : moonIcon}
      alt={isDark ? "Light Mode" : "Dark Mode"}
      className={styles.icon}
      onClick={onToggle}
    />
  );
};

export default DarkModeButton;

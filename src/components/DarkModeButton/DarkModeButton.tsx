import styles from "./DarkModeButton.module.scss";

const DarkModeButton = () => {
  return (
    <img
      src="/src/assets/icons/moon.svg"
      alt="Dark Mode"
      className={styles.icon}
    />
  );
};

export default DarkModeButton;

import styles from "./PageTitle.module.scss";

type Props = {
  text: string;
};

const PageTitle = (props: Props) => {
  return <h1 className={styles.title}>{props.text}</h1>;
};

export default PageTitle;

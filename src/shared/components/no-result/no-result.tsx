import { NoResultProps } from "./no-result.types";
import styles from "./styles.module.scss";

export const NoResult = ({
  title = "No result",
  text = "Couldn't find anything",
  ...props
}: NoResultProps) => {
  return (
    <div className={styles["no-result"]} {...props}>
      {title && <div className={styles["title"]}>{title}</div>}
      {text && <p className={styles["text"]}>{text}</p>}
    </div>
  );
};

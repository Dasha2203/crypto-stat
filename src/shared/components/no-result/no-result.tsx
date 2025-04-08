import clsx from "clsx";
import { NoResultProps } from "./no-result.types";
import styles from "./styles.module.scss";

export const NoResult = ({
  title = "No result",
  text = "Couldn't find anything",
  className,
  style,
}: NoResultProps) => {
  return (
    <div className={clsx(styles["no-result"], className)} style={style}>
      {title && <div className={styles["title"]}>{title}</div>}
      {text && <p className={styles["text"]}>{text}</p>}
    </div>
  );
};

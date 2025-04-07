import clsx from "clsx";
import { TextFieldProps } from "./text-field.types";
import styles from "./styles.module.scss";

export const TextField = ({
  error,
  helperText,
  label,
  color = "primary",
  className,
  style,
  ...props
}: TextFieldProps) => {
  return (
    <label
      className={clsx(
        styles["text-field"],
        styles[`text-field_${color}`],
        error && styles["error"],
        className,
      )}
      style={style}
    >
      {label && <span className={styles["text-field__label"]}>{label}</span>}

      <input className={clsx(styles["text-field__input"])} {...props} />
      {helperText && (
        <span className={styles["text-field__helper"]}>{helperText}</span>
      )}
    </label>
  );
};

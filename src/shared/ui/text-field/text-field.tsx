import { TextFieldProps } from "./text-field.types";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const TextField = ({
  error,
  helperText,
  label,
  color = "primary",
  className,
  ...props
}: TextFieldProps) => {
  return (
    <label
      className={clsx(
        styles["text-field"],
        styles[`text-field_${color}`],
        error && styles["error"],
      )}
    >
      {label && <span className={styles["text-field__label"]}>{label}</span>}
      <div>
        <input
          className={clsx(styles["text-field__input"], className)}
          {...props}
        />
      </div>
      {helperText && (
        <span className={styles["text-field__helper"]}>{helperText}</span>
      )}
    </label>
  );
};

import clsx from "clsx";
import { ButtonProps } from "./button.types";
import styles from "./styles.module.scss";

export const Button = ({
  color = "primary",
  variant = "contained",
  children,
  className,
  ...props
}: ButtonProps) => {
  const commonClassName = clsx(
    styles["button"],
    styles[`button_${color}`],
    styles[`button_${variant}`],
    className,
  );

  if ("href" in props) {
    const { href, target, ...restProps } = props;

    return (
      <a className={commonClassName} href={href} target={target} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={commonClassName} {...props}>
      {children}
    </button>
  );
};

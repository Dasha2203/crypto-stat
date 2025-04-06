import clsx from "clsx";
import { ButtonProps } from "./button.types";
import styles from "./styles.module.scss";

export const Button = ({
  color = "primary",
  variant = "contained",
  children,
  ...props
}: ButtonProps) => {
  const className = clsx(
    styles["button"],
    styles[`button_${color}`],
    styles[`button_${variant}`],
    props.className,
  );

  if ("href" in props) {
    const { href, target, ...restProps } = props;

    return (
      <a className={className} href={href} target={target} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

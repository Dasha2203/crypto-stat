import { HTMLAttributes } from "react";

type ButtonColor = "primary";
type ButtonVariant = "contained" | "outlined";

type ButtonCommonProps = {
  color?: ButtonColor;
  variant?: ButtonVariant;
};

type BtnProps = ButtonCommonProps &
  HTMLAttributes<HTMLButtonElement> & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
  };

type AnchorProps = ButtonCommonProps &
  HTMLAttributes<HTMLAnchorElement> & {
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
  };

export type ButtonProps = BtnProps | AnchorProps;

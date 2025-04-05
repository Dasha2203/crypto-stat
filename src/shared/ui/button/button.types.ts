import { HTMLAttributes } from "react";

type ButtonColor = "primary";

type ButtonCommonProps = {
  color?: ButtonColor;
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

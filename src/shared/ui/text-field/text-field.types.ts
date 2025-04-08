import { InputHTMLAttributes } from "react";

type InputColor = "primary";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: boolean;
  color?: InputColor;
};

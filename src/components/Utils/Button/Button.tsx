import { ButtonHTMLAttributes } from "react";

import { ThemeFontSizesKeysType } from "../../../styles/fontSizes";
import { StyledButton } from "./Button.style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  text: string;
  customSize?: ThemeFontSizesKeysType;
}

const Button = ({
  fullWidth = false,
  customSize = "l",
  text,
  ...rest
}: IButtonProps) => (
  <StyledButton fullWidth={fullWidth} customSize={customSize} {...rest}>
    {text}
  </StyledButton>
);

export default Button;

import { forwardRef, Ref, InputHTMLAttributes } from "react";

import { ThemeFontSizesKeysType } from "../../../styles/fontSizes";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.style";
import { StyledInput, StyledLabel, Wrapper } from "./input.style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: EInputType;
  placeholder?: string;
  customSize?: ThemeFontSizesKeysType;
  error?: string;
  label?: string;
  name: string;
  value: string;
}

export enum EInputType {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  CHECKBOX = "checkbox",
}

const Input = forwardRef(
  (
    {
      type = EInputType.TEXT,
      placeholder,
      error,
      name,
      customSize = "m",
      label,
      value,
      ...rest
    }: IInputProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <Wrapper>
      {label && <StyledLabel customSize={customSize}>{label}</StyledLabel>}
      <StyledInput
        id={name}
        name={name}
        ref={ref}
        customSize={customSize}
        type={type}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
      {<ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  )
);
export default Input;

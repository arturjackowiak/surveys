import styled from "styled-components";

import { ThemeFontSizesKeysType } from "../../../styles/fontSizes";

interface IStyledLabelProps {
  customSize: ThemeFontSizesKeysType;
}

interface IStyledInputProps {
  customSize: ThemeFontSizesKeysType;
}

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const StyledLabel = styled.span<IStyledLabelProps>`
  color: #fff;
  font-size: ${({ theme, customSize }) => theme.fontSize(customSize)};
  font-weight: 500;
  padding-left: 0.5rem;
`;

export const StyledInput = styled.input<IStyledInputProps>`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  width: 100%;
  padding: 1.5rem;
  border: none;
  outline: none;
  color: #fff;
  font-size: ${({ theme, customSize }) => theme.fontSize(customSize)};
  font-weight: normal;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.4rem rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(12rem);
    border-radius: 0.5rem;
  }
  &::placeholder {
    color: #fff;
    font-weight: 100;
    font-size: ${({ theme, size }) => theme.fontSize(size)};
  }
`;

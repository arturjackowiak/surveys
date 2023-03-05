import styled from "styled-components";

import { ThemeFontSizesKeysType } from "../../../styles/fontSizes";

interface IButtonProps {
  fullWidth: boolean;
  customSize: ThemeFontSizesKeysType;
}

export const StyledButton = styled.button<IButtonProps>`
  align-items: center;
  background: rgba(31, 38, 135, 0.37);
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: ${({ theme, customSize }) => theme.fontSize(customSize)};
  font-weight: 500;
  outline: none;
  padding: 1rem 2rem;
  transition: background 0.3s ease-in;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  &:hover {
    background: rgba(31, 38, 135, 0.9);
  }
`;

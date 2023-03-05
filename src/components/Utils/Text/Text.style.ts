import styled from "styled-components";

import { ThemeFontSizesKeysType } from "../../../styles/fontSizes";

interface IStyledTextProps {
  customSize: ThemeFontSizesKeysType;
}

export const StyledText = styled.span<IStyledTextProps>`
  color: #fff;
  font-size: ${({ theme, customSize }) => theme.fontSize(customSize)};
`;

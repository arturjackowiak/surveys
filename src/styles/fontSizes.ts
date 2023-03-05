const fontSizes = {
  xs: "1rem",
  s: "1.4rem",
  m: "1.6rem",
  l: "2rem",
  xl: "2.5rem",
  xxl: "3rem",
};

export type ThemeFontSizesKeysType = keyof typeof fontSizes;

const themeFontSizesTypeGuard = (
  fontSizeName: ThemeFontSizesKeysType
): fontSizeName is ThemeFontSizesKeysType =>
  Object.keys(fontSizes).includes(fontSizeName);

export const fontSize = (fontSizeName: ThemeFontSizesKeysType): string => {
  return themeFontSizesTypeGuard(fontSizeName)
    ? fontSizes[fontSizeName]
    : "1rem";
};

export default fontSize;

const colors = {
  white: "#fff",
  black: "#000",
  background: "#181818",
  error: "#ff3333",
  success: "#4BB543",
};

export type ThemeColorsKeysType = keyof typeof colors;

const themeColorTypeGuard = (
  colorName: ThemeColorsKeysType
): colorName is ThemeColorsKeysType => Object.keys(colors).includes(colorName);

export const color = (colorName: ThemeColorsKeysType): string => {
  return themeColorTypeGuard(colorName) ? colors[colorName] : "inherit";
};

export default color;

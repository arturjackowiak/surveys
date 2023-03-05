const fontWeights = {
  light: 100,
  normal: 300,
  bold: 500,
};

export type ThemeFontWeightsKeysType = keyof typeof fontWeights;

const themeFontWeightTypeGuard = (
  fontWeightName: ThemeFontWeightsKeysType
): fontWeightName is ThemeFontWeightsKeysType =>
  Object.keys(fontWeights).includes(fontWeightName);

export const fontWeight = (
  fontWeightName: ThemeFontWeightsKeysType
): number => {
  return themeFontWeightTypeGuard(fontWeightName)
    ? fontWeights[fontWeightName]
    : 300;
};

export default fontWeight;

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const scaleWidth = width / 375;
export const scaleHeight = height / 812;

export const scale = value => value * scaleWidth;

export const customWidth = value => ({
  width: value * scaleWidth,
});

export const customHeight = value => ({
  height: value * scaleWidth,
});

export const customFontsize = value => ({
  fontSize: value * scaleWidth,
});

export const customMarginLeft = value => ({
  marginLeft: value * scaleWidth,
});

export const customMarginRight = value => ({
  marginRight: value * scaleWidth,
});

export const customMarginTop = value => ({
  marginTop: value * scaleWidth,
});

export const customMarginBottom = value => ({
  marginBottom: value * scaleWidth,
});

export const customMarginHorizontal = value => ({
  marginHorizontal: value * scaleWidth,
});

export const customMarginVertical = value => ({
  marginVertical: value * scaleWidth,
});

export const customPadding = value => ({
  padding: value * scaleWidth,
});

export const customPaddingLeft = value => ({
  paddingLeft: value * scaleWidth,
});

export const customPaddingRight = value => ({
  paddingRight: value * scaleWidth,
});

export const customPaddingTop = value => ({
  paddingTop: value * scaleWidth,
});

export const customPaddingBottom = value => ({
  paddingBottom: value * scaleWidth,
});

export const customPaddingVertical = value => ({
  paddingVertical: value * scaleWidth,
});

export const customPaddingHorizontal = value => ({
  paddingHorizontal: value * scaleWidth,
});

export const customLineHeight = value => ({
  lineHeight: value * scaleWidth,
});

import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle,I18nManager} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Util} from '../Utils/utils';
import COLORS from '../Constants/colors';

interface OwnProps {
  variant?: keyof TypographyStyles;
  color?: string;
  style?: StyleProp<TextStyle>;

}

type Props = OwnProps & TextProps;

const Typography: React.FC<Props> = ({variant = 'body', color = COLORS.black,style, children, ...otheProps}) => {
  return (
    <Text style={[styles[variant], {color}, style,]} {...otheProps}>
      {children}
    </Text>
  );
};

export default Typography;

interface TypographyStyles {
  h1?: StyleProp<TextStyle>;
  h2?: StyleProp<TextStyle>;
  h3?: StyleProp<TextStyle>;
  h4?: StyleProp<TextStyle>;
  h5?: StyleProp<TextStyle>;
  h6?: StyleProp<TextStyle>;
  h7?: StyleProp<TextStyle>;
  body?: StyleProp<TextStyle>;
  body1?: StyleProp<TextStyle>;
  title?: StyleProp<TextStyle>;
  title1?: StyleProp<TextStyle>;
  description?: StyleProp<TextStyle>;
  descriptionTiny?: StyleProp<TextStyle>;
  lightDescription?: StyleProp<TextStyle>;
  lightDescriptionNormal?: StyleProp<TextStyle>;
  bold?: StyleProp<TextStyle>;
  trademark?: StyleProp<TextStyle>;
  mediumTopText?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  h1: {
    fontSize: moderateScale(24, 0.3),
    fontFamily: Util.FontFamily.FuturaDemi,
    textAlign: 'left',
  },
  h2: {
    fontSize: moderateScale(22, 0.3),
    fontFamily: Util.FontFamily.FuturaDemi,
    textAlign: 'left',
  },
  h3: {
    fontSize: moderateScale(20, 0.3),
    fontFamily: Util.FontFamily.FuturaDemi,
    textAlign: 'left',
  },
  h4: {
    fontSize: moderateScale(18, 0.3),
    fontFamily: Util.FontFamily.FuturaDemi,
    textAlign: 'left',
  },
  h5: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: Util.FontFamily.FuturaDemi,
    textAlign: 'left',
  },
  h6: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: Util.FontFamily.FuturaDemi,
    textAlign: 'left',
  },
  h7: {
    fontSize: moderateScale(10, 0.3),
    fontFamily: Util.FontFamily.FuturaDemi,
    textAlign: 'left',
  },
  body: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: Util.FontFamily.FuturaBook,
    textAlign: 'left',
  },
  body1: {
    fontSize: moderateScale(12, 0.3),
    fontFamily: Util.FontFamily.FuturaBook,
    textAlign: 'left',
  },
  title: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: Util.FontFamily.FuturaMedium,
    textAlign: 'left',
  },
  title1: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: Util.FontFamily.FuturaMedium,
    textAlign: 'left',
  },
  description: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: Util.FontFamily.FuturaBook,
    textAlign: 'left',
  },
  mediumTopText: {
    fontSize: moderateScale(12.5, 0.3),
    fontFamily: Util.FontFamily.FuturaBook,
    textAlign: 'left',
  },
  descriptionTiny: {
    fontSize: moderateScale(10, 0.3),
    fontFamily: Util.FontFamily.FuturaBook,
    textAlign: 'left',
  },
  lightDescription: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: Util.FontFamily.FuturaLight,
    textAlign: 'left',
  },
  lightDescriptionNormal: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: Util.FontFamily.FuturaLight,
    textAlign: 'left',
  },
  bold: {
    fontSize: moderateScale(20, 0.3),
    fontFamily: Util.FontFamily.FuturaBold,
    textAlign: 'left',
  },
  trademark: {
    fontSize: moderateScale(8, 0.3),
    fontFamily: Util.FontFamily.FuturaMedium,
    textAlign: 'left',
  },
});

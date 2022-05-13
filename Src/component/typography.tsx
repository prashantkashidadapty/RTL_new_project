import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle,I18nManager} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Util} from '../Utils/CommonFontfamilies';
import COLORS from '../Constants/colors';

interface OwnProps {
  variant?: keyof TypographyStyles;
  color?: string;
  style?: StyleProp<TextStyle>;
  textAlign: string;
}

type Props = OwnProps & TextProps;

const Typography: React.FC<Props> = ({variant = 'body', color = COLORS.black,style, textAlign='left' ,children, ...otheProps}) => {
  return (
    <Text style={[styles[variant], {color},{textAlign}, style,]} {...otheProps}>
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
  title?: StyleProp<TextStyle>;
  description?: StyleProp<TextStyle>;
  bold?: StyleProp<TextStyle>;
  trademark?: StyleProp<TextStyle>;
  mediumTopText?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  h1: {
    fontSize: moderateScale(24, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_BOLD,
  },
  h2: {
    fontSize: moderateScale(22, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_BOLD,
  },
  h3: {
    fontSize: moderateScale(20, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_BOLD,
  },
  h4: {
    fontSize: moderateScale(18, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_BOLD,
  },
  h5: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_BOLD,
  },
  h6: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_BOLD,
  },
  h7: {
    fontSize: moderateScale(10, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_BOLD,
  },
  body: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_REGULAR,
  },
  title: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_TITLE,
  },

  description: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_DESCRIPTION,
  },
  mediumTopText: {
    fontSize: moderateScale(12.5, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_SEMI,
  },
  bold: {
    fontSize: moderateScale(20, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_BOLD,
  },
  trademark: {
    fontSize: moderateScale(8, 0.3),
    fontFamily: Util.FontFamily.PRIMARY_FONT_TRADEMARK,
  },
});

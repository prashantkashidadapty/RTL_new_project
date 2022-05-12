

import {StyleSheet,TextStyle} from 'react-native';
import {moderateScale,} from 'react-native-size-matters';
import COLORS from '../constants/colors';
import {Util} from '../Utils/CommonFontfamilies';
interface IStyle {
    h1: TextStyle;
  fontStyle: TextStyle;
  mediumFont: TextStyle;
  lowFont: TextStyle;
  sectionHeaderStyle: TextStyle;
 
}

export const commonFontStyles = (props: any) =>
  StyleSheet.create<IStyle>({
    h1: {
        fontSize: moderateScale(24, 0.3),
        fontFamily: Util.FontFamily.PRIMARY_FONT_BOLD,
        textAlign: 'left',
      },
    fontStyle: {
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      color: props.color,
      textTransform: props.textTransform,
    },
    sectionHeaderStyle: {
      color: props.color,
      fontSize: moderateScale(18, 0.3),
      fontFamily: Util.FontFamily.PRIMARY_FONT_TITLE,
      textTransform: props.textTransform,
    },
    lowFont: {
        fontFamily: Util.FontFamily.PRIMARY_FONT_SEMI,
        color: COLORS.black,
        fontSize: moderateScale(12, 0.4),
      },
    mediumFont: {
        color: COLORS.primary,
        fontFamily: Util.FontFamily.PRIMARY_FONT_REGULAR,
        fontSize: moderateScale(18, 0.3),
      },
   
  });

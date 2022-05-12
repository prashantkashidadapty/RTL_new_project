import {StyleSheet,TextStyle} from 'react-native';
import {moderateScale,} from 'react-native-size-matters';
import COLORS from '../Constants/colors';
import {Util} from '../Utils/CommonFontfamilies';
interface IStyle {
  RegularFont : TextStyle;
  PRIMARY_FONT_SEMI :TextStyle;
  PRIMARY_FONT_BOLD:TextStyle;
  PRIMARY_FONT_TITLE:TextStyle;
  PRIMARY_FONT_TRADEMARK:TextStyle;
  PRIMARY_FONT_DESCRIPTION: TextStyle;
  PRIMARY_FONT_LIGHT:TextStyle;
}

export const Commonfontstyle = (props: any) =>
  StyleSheet.create<IStyle>({
    RegularFont: {
        fontSize: moderateScale(24, 0.3),
        fontFamily: Util.FontFamily.PRIMARY_FONT_BOLD,
        textAlign: 'left',
      },
      PRIMARY_FONT_SEMI: {
      fontFamily: Util.FontFamily.PRIMARY_FONT_SEMI,
      fontSize:20,
      color:COLORS.black ,
      textAlign: 'left',
    },
    PRIMARY_FONT_BOLD: {
      color:COLORS.black,
      fontSize: moderateScale(30, 0.3),
      fontFamily: Util.FontFamily.PRIMARY_FONT_TITLE,
      textAlign: 'left',
    },
    PRIMARY_FONT_TITLE: {
        fontFamily: Util.FontFamily.PRIMARY_FONT_SEMI,
        color: COLORS.black,
        fontSize: moderateScale(12, 0.4),
        textAlign: 'left',
      },
      PRIMARY_FONT_TRADEMARK: {
        color: COLORS.primary,
        fontFamily: Util.FontFamily.PRIMARY_FONT_REGULAR,
        fontSize: moderateScale(18, 0.3),
        textAlign: 'left',
      },
      PRIMARY_FONT_DESCRIPTION: {
        color: COLORS.primary,
        fontFamily: Util.FontFamily.PRIMARY_FONT_REGULAR,
        fontSize: moderateScale(18, 0.3),
        textAlign: 'left',
      },
      PRIMARY_FONT_LIGHT: {
        color: COLORS.primary,
        fontFamily: Util.FontFamily.PRIMARY_FONT_REGULAR,
        fontSize: moderateScale(18, 0.3),
        textAlign: 'left',
      },
   
  });

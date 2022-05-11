import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';


interface OwnProps {
  color?: string;
  style?: StyleProp<TextStyle>;
}

type Props = OwnProps & TextProps;

const Typography: React.FC<Props> = ({ color = 'black', style, children, ...otheProps}) => {
  return (
    <Text style={[{color}, style]} {...otheProps}>
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
    fontSize: 24,
    fontFamily: 'bold',
  },
  h2: {
    fontSize: 22,
    fontFamily: 'bold',
  },
  h3: {
    fontSize:20,
    fontFamily: 'bold',
  },
  h4: {
    fontSize:18,
    fontFamily: 'bold',
  },
  h5: {
    fontSize: 16,
    fontFamily: 'bold',
  },
  h6: {
    fontSize: 14,
    fontFamily: 'bold',
  },
  h7: {
    fontSize: 12,
    fontFamily: 'bold',
  },
  body: {
    fontSize:23 ,
    fontFamily: 'times new roman',
  },
  body1: {
    fontSize: 40,
    fontFamily: 'times new roman',
  },
  title: {
    fontSize: 14,
    fontFamily: 'bold',
  },
  title1: {
    fontSize: 16,
    fontFamily:'bold',
  },
  description: {
    fontSize: 14,
    fontFamily: 'times new roman',
  },
  mediumTopText: {
    fontSize: 14,
    fontFamily: 'times new roman',
  },
  descriptionTiny: {
    fontSize: 12,
    fontFamily: 'times new roman',
  },
  lightDescription: {
    fontSize: 14,
    fontFamily: 'times new roman',
  },
  lightDescriptionNormal: {
    fontSize: 14,
    fontFamily: 'times new roman',
  },
  bold: {
    fontSize: 20,
    fontFamily: 'bold',
  },
  trademark: {
    fontSize: 14,
    fontFamily:'bold'
  },
});

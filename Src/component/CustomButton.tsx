import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters'; 
type Props = {
  title: string;
  onPress: any;
};

const CustomButton: React.FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity style={styles.buttoncontainer} onPress={props.onPress}>
      <View>
        <Text style={styles.buttontext}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttoncontainer: {
    backgroundColor: 'skyblue',
    height: 50,
    width: '50%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    textAlign: 'center',
    justifyContent:'center'
  },
  buttontext: {
    fontFamily: 'times new roman',
    fontSize:  moderateScale(22, 0.3),
    textAlign: 'center',
    color: 'brown',
    padding: 5,
  },
});
export default CustomButton;

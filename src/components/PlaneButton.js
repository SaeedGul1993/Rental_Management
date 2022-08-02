import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');
export const PlaneButtonComponent = ({
  Width = width / 1.2,
  color = 'grey',
  btnText,
  onPress,
  btnHeight = 50,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonWrapper(Width, color, btnHeight)}>
      <View style={styles.subView(btnHeight)}>
        <Text numberOfLines={2} style={styles.textStyle}>
          {btnText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: (width, color, hgt) => ({
    width: width,
    backgroundColor: color,
    borderRadius: 10,
    height: hgt,
    alignSelf: 'center',
  }),
  subView: hgt => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: hgt,
  }),
  textStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

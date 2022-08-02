import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const FavButtonComponent = ({
  iconName,
  onPress,
  Width,
  Height,
  Br,
  size = 25,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.favWrapper(Width, Height, Br)}>
      <AntDesign name={iconName} size={size} color={'white'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favWrapper: (width, height, br) => ({
    width: width,
    height: height,
    borderRadius: br,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  }),
});

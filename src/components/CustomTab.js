import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');
export const CustomTabComponent = ({selectedIndex, onPress, tabArray}) => {
  return (
    <View style={styles.tabWrapper}>
      {tabArray?.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress(index, item?.name)}
            style={styles.tabStyle(
              item?.flex,
              index === selectedIndex ? 400 : item?.zIndex,
              item?.marginRight,
              index === selectedIndex ? 'grey' : 'white',
            )}>
            <Text
              style={styles.tabItemText(
                index === selectedIndex ? 'white' : 'grey',
              )}>
              {item?.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabWrapper: {
    width: width / 1.2,
    alignSelf: 'center',
    height: 55,
    borderRadius: 15,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent:'center'
  },
  tabStyle: (flex, zIndex, marginRight, bgColor) => ({
    borderWidth: 0.5,
    borderColor: 'grey',
    height: 55,
    borderRadius: 15,
    marginRight: marginRight,
    backgroundColor: bgColor,
    alignItems: 'center',
    justifyContent: 'center',
    flex: flex,
    zIndex: zIndex,
  }),
  tabItemText: color => ({
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    color: color,
  }),
});

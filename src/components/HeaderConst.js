import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
export const CustomHeaderWithIcons = ({iconName1, iconName2, text}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textStyle}>{text}</Text>
      <View style={styles.iconWrapper}>
        <TouchableOpacity>
          <FontAwesome5Icons name={iconName1} size={20} color={'#333'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcons name={iconName2} size={20} color={'#333'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1.2,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'grey',
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 70,
  },
});

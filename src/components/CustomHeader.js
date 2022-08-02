import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from 'react-native-elements';
import FeatureIcons from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');
export const CustomHeaderComponent = ({
  centerText,
  iconName = 'align-justify',
  onPress,
  color = 'lightgrey',
}) => {
  return (
    <Header
      containerStyle={styles.containerStyle}
      leftComponent={() => {
        return (
          <TouchableOpacity onPress={onPress}>
            <FeatureIcons name={iconName} size={30} color={color} />
          </TouchableOpacity>
        );
      }}
      centerComponent={() => {
        return <Text style={styles.centerTextStyle}>{centerText}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'transparent',
  },
  centerTextStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {labels} from '../config/labels';

const {width} = Dimensions.get('window');
export const CustomGoogleMapComponent = ({onPress}) => {
  return (
    <View style={styles.googleMapWrapper}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name="google-maps" size={25} color={'#333'} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{labels.selectLatLng}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  googleMapWrapper: {
    width: width / 1.2,
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  textStyle: {
    color: 'grey',
    fontSize: 14,
    marginTop: 5,
  },
});

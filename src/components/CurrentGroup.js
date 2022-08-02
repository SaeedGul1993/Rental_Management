import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {labels} from '../config/labels';
import {PlaneButtonComponent} from './PlaneButton';

const {width, height} = Dimensions.get('window');
export const CustomCurrentGroup = ({topIcon, TopColor, topText, onPress}) => {
  return (
    <View style={styles.jobItemWrapper('transparent')}>
      <View style={styles.topHeader}>
        <Text style={styles.jobTitle('#333')}>{topText}</Text>
        <TouchableOpacity>
          <Ionicons name={topIcon} size={20} color={TopColor} />
        </TouchableOpacity>
      </View>
      <View style={styles.height} />
      <View style={styles.subView}>
        <View style={styles.flex(1)}>
          <Text style={styles.textStyle('grey')}>{`${
            labels.itemOfMaintenance
          }: ${'2'}`}</Text>
        </View>
        <PlaneButtonComponent
          btnText={labels.done}
          Width={width / 5}
          btnHeight={35}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jobItemWrapper: bg => ({
    width: width / 1.2,
    minHeight: 80,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: 'lightgrey',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: bg,
  }),
  jobTitle: color => ({
    fontSize: 14,
    fontWeight: '600',
    color: color,
  }),
  textStyle: color => ({
    fontSize: 12,
    fontWeight: '500',
    color: color,
  }),
  flex: flex => ({
    flex: flex,
  }),
  subView: {flexDirection: 'row', alignItems: 'center'},
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  height: {height: 10},
  mR: {marginLeft: 10},
});

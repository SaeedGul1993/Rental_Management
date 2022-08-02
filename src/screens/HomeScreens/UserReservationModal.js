import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomGroupComponent} from '../../components/Group';
import {PlaneButtonComponent} from '../../components/PlaneButton';
import {labels} from '../../config/labels';
// window-close
const {width} = Dimensions.get('window');
export const CustomUserReservationModal = ({onPress}) => {
  return (
    <View style={styles.modalContent}>
      <TouchableOpacity onPress={onPress} style={styles.crossStyle}>
        <MaterialCommunityIcons name="window-close" size={30} color="#333" />
      </TouchableOpacity>
      <Text style={styles.mainTitle}>{labels.reserveUntil}</Text>

      <View style={styles.height(20)} />
      <View style={styles.fieldWrapper}>
        <Text style={styles.fieldText}>{labels.date}</Text>
      </View>
      <View style={styles.height(10)} />

      <View style={styles.fieldWrapper}>
        <Text style={styles.fieldText}>{labels.time}</Text>
      </View>
      <View style={styles.height(30)} />
      <PlaneButtonComponent
        btnText={labels.reserve}
        onPress={onPress}
        Width={width / 1.4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    width: width / 1.2,
    backgroundColor: 'white',
    borderRadius: 15,
    minHeight: 200,
    paddingVertical: 10,
    paddingBottom: 40,
  },
  crossStyle: {
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'left',
    color: '#333',
    marginTop: 10,
    marginLeft: 30,
  },
  dropDownStyle: {borderColor: 'lightgrey', borderRadius: 10},
  dropDownContainerStyles: {borderColor: 'lightgrey'},
  dropwDownMainContainer: {width: '85%'},
  lastDropDown: {
    alignSelf: 'center',
    marginTop: 10,
    zIndex: 1000,
  },
  height: height => ({
    height: height,
  }),
  labelStyle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 35,
    marginBottom: 10,
    color: '#333',
  },
  detailsText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    color: 'grey',
  },
  detailsMsgText: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    color: 'lightgrey',
  },
  Width: width => ({
    width: width,
    alignSelf: 'center',
  }),
  detailsWrapper: {
    alignSelf: 'center',
    width: width / 1.4,
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    minHeight: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  fieldWrapper: {
    width: width / 1.4,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    minHeight: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  fieldText: {fontSize: 12, color: 'grey', fontWeight: '400'},
});

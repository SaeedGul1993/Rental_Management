import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {CustomHeaderComponent} from '../../components/CustomHeader';
import {PlaneButtonComponent} from '../../components/PlaneButton';
import {labels} from '../../config/labels';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default UploadPictureScreen = ({navigation}) => {
  return (
    <View style={styles.clearanceWrapper}>
      <CustomHeaderComponent
        centerText={labels.uploadPic}
        onPress={() => navigation.goBack()}
        iconName={'chevron-left'}
      />
      <View style={styles.flex}>
        <Ionicons name="image-sharp" size={200} color="lightgreen" />
      </View>
      <PlaneButtonComponent
        btnText={labels.done}
        onPress={() => {
          navigation.navigate('CurrentJobDetail');
        }}
      />
      <View style={styles.height(50)} />
    </View>
  );
};

const styles = StyleSheet.create({
  clearanceWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 35,
    marginBottom: 10,
    color: '#333',
  },
  dropDownStyle: {borderColor: 'lightgrey', borderRadius: 10},
  dropDownContainerStyles: {borderColor: 'lightgrey'},
  dropwDownMainContainer: {width: '85%'},
  lastDropDown: {
    alignSelf: 'center',
  },
  height: height => ({
    height: height,
  }),
  zIndex: index => ({
    zIndex: index,
  }),
  heading: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 35,
    marginBottom: 10,
    color: '#333',
  },
  flex: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {CustomHeaderComponent} from '../../components/CustomHeader';
import {PlaneButtonComponent} from '../../components/PlaneButton';
import {labels} from '../../config/labels';

export default ClearanceSection = ({navigation}) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View style={styles.clearanceWrapper}>
      <CustomHeaderComponent
        onPress={() => navigation.goBack()}
        iconName={'chevron-left'}
      />
      <View style={styles.height(20)} />
      <Text style={styles.heading}>{labels.clearanceLevel}</Text>
      <View style={styles.height(10)} />
      <Text style={styles.labelStyle}>{labels.selectEmployee}</Text>
      <View style={[styles.lastDropDown, styles.zIndex(10000)]}>
        <DropDownPicker
          open={open1}
          value={value}
          items={items}
          setOpen={setOpen1}
          setValue={setValue}
          setItems={setItems}
          containerStyle={styles.dropwDownMainContainer}
          style={styles.dropDownStyle}
          dropDownContainerStyle={styles.dropDownContainerStyles}
        />
      </View>
      <View style={styles.height(20)} />
      <Text style={styles.labelStyle}>{labels.selectRole}</Text>
      <View style={[styles.lastDropDown, styles.zIndex(9999)]}>
        <DropDownPicker
          open={open2}
          value={value}
          items={items}
          setOpen={setOpen2}
          setValue={setValue}
          setItems={setItems}
          containerStyle={styles.dropwDownMainContainer}
          style={styles.dropDownStyle}
          dropDownContainerStyle={styles.dropDownContainerStyles}
        />
      </View>
      <View style={styles.height(50)} />
      <PlaneButtonComponent
        btnText={labels.setClearanceLevel}
        onPress={() => {}}
      />
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
});

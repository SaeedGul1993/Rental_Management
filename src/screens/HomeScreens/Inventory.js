import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {CustomHeaderWithIcons} from '../../components/HeaderConst';
import {CustomInputFieldComponent} from '../../components/InputField';
import {InventoryGroupComponent} from '../../components/InventoryGroup';
import {PlaneButtonComponent} from '../../components/PlaneButton';
import {labels} from '../../config/labels';

export default InventorySection = ({navigation, onPress, user = false}) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View style={styles.clearanceWrapper}>
      <View style={styles.height(20)} />
      {user ? null : (
        <>
          <CustomHeaderWithIcons
            text={''}
            iconName1={'sort-amount-down-alt'}
            iconName2={'sliders'}
          />
          <CustomInputFieldComponent
            placeholder={labels.search}
            inputHeight={45}
            rightImageBool={true}
            rightImage={'search'}
          />
        </>
      )}
      {user ? (
        <>
          <View style={styles.height(30)} />
          <InventoryGroupComponent
            user={user}
            onPress={onPress}
            OnFullPress={() => navigation.navigate('UserGroupDetails')}
          />
          <View style={styles.height(30)} />
          <InventoryGroupComponent
            user={user}
            onPress={onPress}
            OnFullPress={() => navigation.navigate('UserGroupDetails')}
          />
          <View style={styles.height(30)} />
          <InventoryGroupComponent
            user={user}
            onPress={onPress}
            OnFullPress={() => navigation.navigate('UserGroupDetails')}
          />
        </>
      ) : (
        <>
          <View style={styles.height(30)} />
          <InventoryGroupComponent onPress={onPress} />
          <View style={styles.height(30)} />
          <InventoryGroupComponent
            showText={true}
            rightText={labels.onMaintenance}
          />
          <View style={styles.height(30)} />
          <InventoryGroupComponent showText={true} rightText={labels.onRent} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  clearanceWrapper: {
    flex: 1,
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
});

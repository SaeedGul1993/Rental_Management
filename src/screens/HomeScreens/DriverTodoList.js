import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FavButtonComponent} from '../../components/FavButton';
import {CustomHeaderWithIcons} from '../../components/HeaderConst';
import {CustomInputFieldComponent} from '../../components/InputField';
import {CustomJonItemComponent} from '../../components/JobItem';
import {labels} from '../../config/labels';

export default TodoList = ({navigation, supervisor}) => {
  return (
    <>
      <CustomHeaderWithIcons
        text={labels.todoList}
        iconName1={'sort-amount-down-alt'}
        iconName2={'sliders'}
      />
      <CustomInputFieldComponent
        placeholder={labels.search}
        inputHeight={45}
        rightImageBool={true}
        rightImage={'search'}
      />
      <View style={styles.height_1(20)} />
      <CustomJonItemComponent
        topText={labels.myJobs}
        topIcon={'location-sharp'}
        TopColor={'lightgrey'}
        pencilIcon={'lead-pencil'}
        trashIcon={'ios-trash'}
        driver={true}
        onPress={() => {
          navigation.navigate('DriverJobDetail');
        }}
      />
      <View style={styles.height_1(20)} />
      <CustomJonItemComponent
        topText={labels.myJobs}
        topIcon={'location-sharp'}
        TopColor={'lightgrey'}
        pencilIcon={'lead-pencil'}
        trashIcon={'ios-trash'}
        driver={true}
        onPress={() => {
          navigation.navigate('DriverJobDetail');
        }}
      />
      <View style={styles.height_1(20)} />
      <CustomJonItemComponent
        topText={labels.myJobs}
        topIcon={'location-sharp'}
        TopColor={'lightgrey'}
        pencilIcon={'lead-pencil'}
        trashIcon={'ios-trash'}
        driver={true}
        onPress={() => {
          navigation.navigate('DriverJobDetail');
        }}
      />
      <View style={styles.height_1(20)} />
      <CustomJonItemComponent
        topText={labels.myJobs}
        topIcon={'location-sharp'}
        TopColor={'lightgrey'}
        pencilIcon={'lead-pencil'}
        trashIcon={'ios-trash'}
        driver={true}
        onPress={() => {
          navigation.navigate('DriverJobDetail');
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  height_1: height => ({
    height: height,
  }),
  favBtn: {
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
});

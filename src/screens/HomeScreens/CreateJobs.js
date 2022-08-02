import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import {CustomHeaderComponent} from '../../components/CustomHeader';
import {CustomInputFieldComponent} from '../../components/InputField';
import {labels} from '../../config/labels';
import DropDownPicker from 'react-native-dropdown-picker';
import {FavButtonComponent} from '../../components/FavButton';
import {CustomGroupComponent} from '../../components/Group';
import {CustomGoogleMapComponent} from '../../components/GoogleMap';
import {PlaneButtonComponent} from '../../components/PlaneButton';

const {width, height} = Dimensions.get('window');
const CreateJobsScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <View style={styles.createJobWrapper}>
      <CustomHeaderComponent
        iconName={'chevron-left'}
        onPress={() => navigation.goBack()}
        centerText={labels.createJob}
        color={'grey'}
      />
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.height(20)} />
        <CustomInputFieldComponent inputHeight={45} label={labels.jobTitle} />
        <View style={styles.height(10)} />

        <CustomInputFieldComponent
          inputHeight={45}
          label={labels.scheduleForm}
        />
        <View style={styles.height(10)} />
        <CustomInputFieldComponent
          inputHeight={45}
          label={labels.scheduleEnd}
        />
        <View style={styles.height(10)} />
        <Text style={styles.labelStyle}>{labels.addGroup}</Text>
        <View style={styles.dropView}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            containerStyle={styles.dropwDownMainContainer}
            style={styles.dropDownStyle}
            dropDownContainerStyle={styles.dropDownContainerStyles}
          />
          <FavButtonComponent
            iconName={'plus'}
            onPress={() => {}}
            Width={40}
            Height={40}
            Br={10}
            size={20}
          />
        </View>
        <View style={styles.height(20)} />
        <Text style={styles.labelStyle}>{labels.group}</Text>
        <View style={styles.height(10)} />
        <CustomGroupComponent />
        <View style={styles.height(20)} />
        <Text style={styles.labelStyle}>{labels.group}</Text>
        <View style={styles.height(10)} />
        <CustomGroupComponent />
        <View style={styles.height(20)} />
        <CustomGoogleMapComponent />
        <View style={styles.height(20)} />
        <Text style={styles.labelStyle}>{labels.assignJobTo}</Text>
        <View style={styles.lastDropDown}>
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
        <PlaneButtonComponent
          btnText={labels.createJob}
          onPress={() => navigation.navigate('JobDetailScreen')}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  createJobWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  height: height => ({
    height: height,
  }),
  dropView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1.2,
    alignSelf: 'center',
    zIndex: 999,
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 45,
    marginBottom: 10,
    color: '#333',
  },
  dropDownStyle: {borderColor: 'lightgrey', borderRadius: 10},
  dropDownContainerStyles: {borderColor: 'lightgrey'},
  dropwDownMainContainer: {width: '85%'},
  lastDropDown: {
    alignSelf: 'center',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 50,
  },
});
export default CreateJobsScreen;

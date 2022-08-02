import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
import {CustomHeaderComponent} from '../../components/CustomHeader';
import {FavButtonComponent} from '../../components/FavButton';
import {CustomGroupComponent} from '../../components/Group';
import {CustomInputFieldComponent} from '../../components/InputField';
import {CustomJonItemComponent} from '../../components/JobItem';
import {PlaneButtonComponent} from '../../components/PlaneButton';
import {labels} from '../../config/labels';

const {width} = Dimensions.get('window');
export default AssignJobScreen = ({navigation}) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const {userDetail} = useSelector(state => state?.Auth);

  return (
    <View style={styles.clearanceWrapper}>
      <CustomHeaderComponent
        centerText={labels.assignJob}
        onPress={() => navigation.goBack()}
        iconName={'chevron-left'}
      />
      <View style={styles.height(40)} />
      <CustomJonItemComponent
        topText={labels.myJobs}
        topIcon={'location-sharp'}
        TopColor={
          userDetail === labels.supervisor.toLowerCase()
            ? 'lightgrey'
            : 'deepskyblue'
        }
        pencilIcon={'lead-pencil'}
        trashIcon={'ios-trash'}
        trashColor={'red'}
        pencilColor={'grey'}
        myJobs={false}
        supervisor={
          userDetail === labels.supervisor.toLowerCase() ? true : false
        }
        supervisorBtnText={labels.fullView}
        supervisorPress={() => {
          navigation.navigate('AssignJobScreen');
        }}
      />
      <View style={styles.height(20)} />
      <View style={styles.position}>
        <CustomInputFieldComponent
          placeholder={labels.addDriver}
          inputHeight={45}
          rightImageBool={false}
          rightImage={'search'}
        />
        <View style={styles.positionAbsolute}>
          <FavButtonComponent
            iconName={'plus'}
            onPress={() => {}}
            Width={35}
            Height={35}
            Br={10}
            size={20}
          />
        </View>
      </View>
      <View style={styles.height(40)} />
      <Text style={styles.labelStyle}>{labels.addedDriver}</Text>
      <View style={styles.height(20)} />

      <CustomGroupComponent
        Width={width / 1.2}
        showCheckBox={false}
        deleteShow={true}
        trashIcon={'ios-trash'}
        name={labels.driverName}
      />
      <View style={styles.height(50)} />
      <PlaneButtonComponent btnText={labels.assignJob} onPress={() => {}} />
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
  position: {position: 'relative'},
  positionAbsolute: {position: 'absolute', right: 40, top: 5},
});

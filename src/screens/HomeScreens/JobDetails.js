import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {CustomHeaderComponent} from '../../components/CustomHeader';
import {CustomGoogleMapComponent} from '../../components/GoogleMap';
import {CustomGroupComponent} from '../../components/Group';
import {CustomInputFieldComponent} from '../../components/InputField';
import {MapComponent} from '../../components/Map';
import {PlaneButtonComponent} from '../../components/PlaneButton';
import {labels} from '../../config/labels';

const {width} = Dimensions.get('window');
const JobDetailScreen = ({navigation}) => {
  return (
    <View style={styles.jobDetailWrapper}>
      <CustomHeaderComponent
        iconName={'chevron-left'}
        onPress={() => navigation.goBack()}
        centerText={labels.jobDetails}
        color={'grey'}
      />
      <View style={styles.height_1(20)} />
      <View style={styles.topView}>
        <Text style={styles.jobTitle}>{labels.jobTitle}</Text>
        <Text style={styles.dateStyle}>{labels.date}</Text>
      </View>
      <View style={styles.height_1(20)} />
      <Text style={styles.labelStyle}>{labels.group}</Text>
      <CustomGroupComponent />
      <View style={styles.height_1(20)} />
      <Text style={styles.labelStyle}>{labels.group}</Text>
      <CustomGroupComponent />
      <View style={styles.height_1(20)} />
      <Text style={styles.labelStyle}>{labels.map}</Text>
      <MapComponent />
      <View style={styles.height_1(20)} />
      <Text style={styles.labelStyle}>{labels.supervisor}</Text>
      <CustomInputFieldComponent
        inputHeight={45}
        placeholder={labels.supervisorName}
        edit={false}
      />
      <View style={styles.height_1(40)} />
      <View style={styles.btnWrapper}>
        <PlaneButtonComponent
          btnText={labels.delete}
          Width={width / 2.5}
          color={'#800000'}
        />
        <PlaneButtonComponent btnText={labels.edit} Width={width / 2.5} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  jobDetailWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  height_1: height => ({
    height: height,
  }),
  favBtn: {
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
  topView: {
    with: width / 1.2,
    paddingHorizontal: 40,
  },
  jobTitle: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  dateStyle: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '200',
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 45,
    marginBottom: 10,
    color: '#333',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width / 1.2,
    alignSelf: 'center',
  },
});
export default JobDetailScreen;

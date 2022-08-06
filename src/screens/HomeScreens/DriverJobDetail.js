import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {CustomHeaderComponent} from '../../components/CustomHeader';
import {CustomGoogleMapComponent} from '../../components/GoogleMap';
import {CustomGroupComponent} from '../../components/Group';
import {CustomInputFieldComponent} from '../../components/InputField';
import {PlaneButtonComponent} from '../../components/PlaneButton';
import {labels} from '../../config/labels';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MapComponent} from '../../components/Map';
// image-sharp
// checkmark

const {width} = Dimensions.get('window');
const DriverJobDetail = ({navigation}) => {
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
      <Text style={styles.labelStyle}>{labels.map}</Text>
      <MapComponent />
      <View style={styles.height_1(20)} />
      <View style={styles.height_1(20)} />
      <Text style={styles.labelStyle}>{labels.group}</Text>
      <CustomGroupComponent
        size={3}
        driver={true}
        showData={() => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Ionicons name="image-sharp" size={20} color="yellow" />
            <Ionicons
              name="checkmark"
              size={20}
              style={{marginLeft: 10}}
              color="green"
            />
          </View>
        )}
      />
      <View style={styles.height_1(20)} />
      <Text style={styles.labelStyle}>{labels.group}</Text>
      <CustomGroupComponent
        size={3}
        driver={true}
        showData={() => (
          <PlaneButtonComponent
            btnText={labels.scan}
            btnHeight={35}
            Width={width / 5}
            onPress={() => navigation.navigate('ScannerScreen')}
          />
        )}
      />
      <View style={styles.height_1(40)} />
      <View style={styles.btnWrapper}>
        <PlaneButtonComponent btnText={labels.startJob} Width={width / 1.3} />
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
export default DriverJobDetail;

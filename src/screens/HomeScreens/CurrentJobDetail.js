import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {CustomHeaderComponent} from '../../components/CustomHeader';
import {CustomGoogleMapComponent} from '../../components/GoogleMap';
import {CustomGroupComponent} from '../../components/Group';
import {CustomInputFieldComponent} from '../../components/InputField';
import {PlaneButtonComponent} from '../../components/PlaneButton';
import {labels} from '../../config/labels';

const {width} = Dimensions.get('window');
const CurrentJobDetail = ({navigation}) => {
  return (
    <View style={styles.jobDetailWrapper}>
      <CustomHeaderComponent onPress={() => navigation.openDrawer()} />
      <View style={styles.height_1(20)} />
      <View style={styles.topView}>
        <Text style={styles.jobTitle}>{labels.jobTitle}</Text>
        <Text style={styles.dateStyle}>{labels.date}</Text>
      </View>
      {/* <View style={styles.height_1(20)} /> */}
      <View style={styles.detailsWrapper}>
        <Text style={styles.detailsText}>{labels.details}</Text>
        <View style={styles.height_1(20)} />
        <Text style={styles.detailsMsgText} numberOfLines={4}>
          {labels.detailmsg}
        </Text>
      </View>
      <View style={styles.height_1(20)} />
      <Text style={styles.labelStyle}>{labels.group}</Text>
      <View style={styles.height_1(20)} />
      <CustomGroupComponent size={4} />

      <View style={styles.height_1(60)} />

      <View style={styles.btnWrapper}>
        <PlaneButtonComponent btnText={labels.done} Width={width / 1.2} onPress={()=>{
            navigation.navigate('UploadPictureScreen')
        }} />
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
  detailsWrapper: {
    alignSelf: 'center',
    width: width / 1.2,

    minHeight: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
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
  favBtn: {
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
  topView: {
    with: width / 1.2,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
export default CurrentJobDetail;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CustomCurrentGroup} from '../../components/CurrentGroup';
import {CustomJonItemComponent} from '../../components/JobItem';
import {labels} from '../../config/labels';

const CurrentScreen = ({navigation}) => {
  return (
    <View style={styles.CurrentWrapper}>
      <View style={styles.height_1(20)} />
      <CustomCurrentGroup
        topText={labels.groupTitle}
        topIcon={'location-sharp'}
        TopColor={'lightgrey'}
        pencilIcon={'lead-pencil'}
        trashIcon={'ios-trash'}
        current={true}
        myJobs={false}
        onPress={() => {
          navigation.navigate('UploadPictureScreen');
        }}
      />
      <View style={styles.height_1(20)} />
      <CustomCurrentGroup
        topText={labels.groupTitle}
        topIcon={'location-sharp'}
        TopColor={'lightgrey'}
        onPress={() => {
          navigation.navigate('UploadPictureScreen');
        }}
      />
      <View style={styles.height_1(20)} />
      <CustomCurrentGroup
        topText={labels.groupTitle}
        topIcon={'location-sharp'}
        TopColor={'lightgrey'}
        onPress={() => {
          navigation.navigate('UploadPictureScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  CurrentWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  height_1: height => ({
    height: height,
  }),
});

export default CurrentScreen;

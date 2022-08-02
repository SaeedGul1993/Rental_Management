import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FavButtonComponent} from '../../components/FavButton';
import {CustomHeaderWithIcons} from '../../components/HeaderConst';
import {CustomInputFieldComponent} from '../../components/InputField';
import {CustomJonItemComponent} from '../../components/JobItem';
import {labels} from '../../config/labels';

export default JobSection = ({navigation, supervisor, user}) => {
  return (
    <>
      {user ? (
        <>
          <View style={styles.height_1(10)} />
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
          <View style={styles.height_1(10)} />
          <CustomJonItemComponent
            topText={labels.myJobs}
            topIcon={'ellipsis-horizontal-circle'}
            TopColor={'deepskyblue'}
            pencilIcon={'lead-pencil'}
            trashIcon={'ios-trash'}
            trashColor={'red'}
            pencilColor={'grey'}
            myJobs={false}
            supervisor={supervisor}
            supervisorPress={() => {
              navigation.navigate('AssignJobScreen');
            }}
          />
          <View style={styles.height_1(10)} />
          <CustomJonItemComponent
            topText={labels.myJobs}
            topIcon={'checkmark-circle-outline'}
            TopColor={'green'}
            pencilIcon={'lead-pencil'}
            trashIcon={'ios-trash'}
            trashColor={'red'}
            pencilColor={'grey'}
            myJobs={false}
            supervisor={supervisor}
            supervisorPress={() => {
              navigation.navigate('AssignJobScreen');
            }}
          />
          <View style={styles.favBtn}>
            <FavButtonComponent
              iconName={'plus'}
              onPress={() => navigation.navigate('CreateJob')}
              Width={65}
              Height={65}
              Br={60}
            />
          </View>
        </>
      ) : (
        <>
          <CustomHeaderWithIcons
            text={labels.myJobs}
            iconName1={'sort-amount-down-alt'}
            iconName2={'sliders'}
          />
          <CustomInputFieldComponent
            placeholder={labels.search}
            inputHeight={45}
            rightImageBool={true}
            rightImage={'search'}
          />
          <View style={styles.height_1(10)} />
          <CustomJonItemComponent
            topText={labels.myJobs}
            topIcon={'ellipsis-horizontal-circle'}
            TopColor={'deepskyblue'}
            pencilIcon={'lead-pencil'}
            trashIcon={'ios-trash'}
            onPress={() => {
              supervisor
                ? navigation.navigate('DriverJobDetail')
                : navigation.navigate('JobDetailScreen');
            }}
          />
          <CustomHeaderWithIcons
            text={supervisor ? labels.assigningJobs : labels.createJobs}
            iconName1={'sort-amount-down-alt'}
            iconName2={'sliders'}
          />
          <CustomInputFieldComponent
            placeholder={labels.search}
            inputHeight={45}
            rightImageBool={true}
            rightImage={'search'}
          />
          <View style={styles.height_1(10)} />
          <CustomJonItemComponent
            topText={labels.myJobs}
            topIcon={'ellipsis-horizontal-circle'}
            TopColor={'deepskyblue'}
            pencilIcon={'lead-pencil'}
            trashIcon={'ios-trash'}
            trashColor={'red'}
            pencilColor={'grey'}
            myJobs={false}
            supervisor={supervisor}
            supervisorPress={() => {
              navigation.navigate('AssignJobScreen');
            }}
          />
          <View style={styles.height_1(10)} />
          <CustomJonItemComponent
            topText={labels.myJobs}
            topIcon={'checkmark-circle-outline'}
            TopColor={'green'}
            pencilIcon={'lead-pencil'}
            trashIcon={'ios-trash'}
            trashColor={'red'}
            pencilColor={'grey'}
            myJobs={false}
            supervisor={supervisor}
            supervisorPress={() => {
              navigation.navigate('AssignJobScreen');
            }}
          />
          <View style={styles.favBtn}>
            <FavButtonComponent
              iconName={'plus'}
              onPress={() => navigation.navigate('CreateJob')}
              Width={65}
              Height={65}
              Br={60}
            />
          </View>
        </>
      )}
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

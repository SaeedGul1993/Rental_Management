import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {CustomHeaderComponent} from '../../components/CustomHeader';
import {CustomHeaderWithIcons} from '../../components/HeaderConst';
import {CustomInputFieldComponent} from '../../components/InputField';
import {CustomJonItemComponent} from '../../components/JobItem';
import {labels} from '../../config/labels';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');
const RentalHistoryScreen = ({navigation}) => {
  return (
    <View style={styles.rentalHistoryWrapper}>
      <View style={styles.height_1(20)} />
      <View style={styles.inputWithIcons}>
        <CustomInputFieldComponent
          placeholder={labels.search}
          inputHeight={45}
          rightImageBool={true}
          rightImage={'search'}
          Width={width / 1.54}
        />
        <TouchableOpacity>
          <FontAwesome5Icons
            name={'sort-amount-down-alt'}
            size={20}
            color={'#333'}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcons name={'sliders'} size={20} color={'#333'} />
        </TouchableOpacity>
      </View>
      <View style={styles.height_1(20)} />
      <CustomJonItemComponent
        topText={labels.myJobs}
        topIcon={'ellipsis-horizontal-circle'}
        TopColor={'deepskyblue'}
        pencilIcon={'lead-pencil'}
        trashIcon={'ios-trash'}
        onPress={() => navigation.navigate('JobDetailScreen')}
        myJobs={false}
        rentalHistory={true}
      />
      <View style={styles.height_1(20)} />
      <CustomJonItemComponent
        topText={labels.myJobs}
        topIcon={'ellipsis-horizontal-circle'}
        TopColor={'deepskyblue'}
        pencilIcon={'lead-pencil'}
        trashIcon={'ios-trash'}
        onPress={() => navigation.navigate('JobDetailScreen')}
        myJobs={false}
        rentalHistory={true}
        cancel={true}
      />
      <View style={styles.height_1(20)} />
      <CustomJonItemComponent
        topText={labels.myJobs}
        topIcon={'checkmark-circle-outline'}
        TopColor={'green'}
        pencilIcon={'lead-pencil'}
        trashIcon={'ios-trash'}
        onPress={() => navigation.navigate('JobDetailScreen')}
        myJobs={false}
        rentalHistory={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rentalHistoryWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  height_1: height => ({
    height: height,
  }),
  inputWithIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1.2,
  },
});

export default RentalHistoryScreen;

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {labels} from '../config/labels';
import {PlaneButtonComponent} from './PlaneButton';

const {width, height} = Dimensions.get('window');
export const CustomJonItemComponent = ({
  topIcon,
  TopColor,
  topText,
  pencilIcon,
  trashIcon,
  myJobs = true,
  pencilColor,
  trashColor,
  onPress,
  rentalHistory = false,
  cancel = false,
  supervisor,
  supervisorPress,
  supervisorBtnText = labels.assignTo,
  driver = false,
  current = false,
}) => {
  return (
    <View style={styles.jobItemWrapper(cancel ? 'red' : 'transparent')}>
      <View style={styles.topHeader}>
        <Text style={styles.jobTitle(cancel ? 'white' : '#333')}>
          {topText}
        </Text>
        {driver || current ? (
          <TouchableOpacity>
            <Ionicons name={topIcon} size={20} color={TopColor} />
          </TouchableOpacity>
        ) : myJobs || cancel ? null : (
          <TouchableOpacity>
            <Ionicons name={topIcon} size={20} color={TopColor} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.height} />
      <View style={styles.subView}>
        <View style={styles.flex(1)}>
          {current ? null : (
            <Text style={styles.textStyle(cancel ? 'white' : 'grey')}>
              {labels.date}
            </Text>
          )}
          {myJobs ? (
            <Text
              style={styles.textStyle(
                cancel ? 'white' : 'grey',
              )}>{`${labels.groups}: 2`}</Text>
          ) : (
            <Text style={styles.textStyle(cancel ? 'white' : 'grey')}>{`${
              current ? labels.itemOfMaintenance : labels.assignedTo
            }: ${
              current ? '2' : supervisor ? 'Driver 1' : 'Supervisor 1'
            }`}</Text>
          )}
        </View>
        {rentalHistory ? null : myJobs || current ? (
          <PlaneButtonComponent
            btnText={current ? labels.done : labels.view}
            Width={width / 5}
            btnHeight={35}
            onPress={onPress}
          />
        ) : supervisor ? (
          <PlaneButtonComponent
            btnText={supervisorBtnText}
            Width={width / 4}
            btnHeight={35}
            onPress={supervisorPress}
          />
        ) : (
          <View style={styles.iconWrapper}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name={pencilIcon}
                size={20}
                color={pencilColor}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={trashIcon}
                size={20}
                style={styles.mR}
                color={trashColor}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jobItemWrapper: bg => ({
    width: width / 1.2,
    minHeight: 80,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: 'lightgrey',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: bg,
  }),
  jobTitle: color => ({
    fontSize: 14,
    fontWeight: '600',
    color: color,
  }),
  textStyle: color => ({
    fontSize: 12,
    fontWeight: '500',
    color: color,
  }),
  flex: flex => ({
    flex: flex,
  }),
  subView: {flexDirection: 'row', alignItems: 'flex-end'},
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  height: {height: 5},
  mR: {marginLeft: 10},
});

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {labels} from '../config/labels';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');
export const CustomGroupComponent = ({
  Width = width / 1.2,
  showCheckBox = false,
  isSelected,
  setSelection,
  deleteShow = false,
  trashIcon,
  name = labels.itemTitle,
  size = 2,
  driver,
  showData = () => {},
}) => {
  const [duumyArray, setDummyArray] = useState(
    Array.from({length: Number(size)}),
  );
  return (
    <View style={styles.groupWrapper(Width)}>
      {duumyArray?.map((item, index) => (
        <View
          style={styles.itemStyle(
            index !== duumyArray?.length - 1 ? 0.5 : 0,
            showCheckBox ? 0 : 10,
          )}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:
                showCheckBox || deleteShow || driver
                  ? 'space-between'
                  : 'flex-start',
            }}>
            <Text style={styles.itemTextStyle}>{name}</Text>
            {showCheckBox ? (
              <CheckBox
                checked={isSelected}
                onPress={setSelection}
                style={styles.checkbox}
                checkedColor="green"
              />
            ) : deleteShow ? (
              <TouchableOpacity>
                <Ionicons
                  name={trashIcon}
                  size={20}
                  style={styles.mR}
                  color={'red'}
                />
              </TouchableOpacity>
            ) : driver ? (
              showData()
            ) : null}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  groupWrapper: width => ({
    alignSelf: 'center',
    width: width,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'lightgrey',
    paddingHorizontal: 10,
    paddingVertical: 0,
  }),
  itemTextStyle: {
    fontSize: 14,
    color: 'grey',
  },
  itemStyle: (bBW, Pv) => ({
    width: '100%',
    borderBottomWidth: bBW,
    paddingVertical: Pv,
    borderBottomColor: 'lightgrey',
  }),
  checkbox: {
    alignSelf: 'center',
  },
  mR: {
    marginRight: 10,
  },
});

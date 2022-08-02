import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {labels} from '../config/labels';
import {PlaneButtonComponent} from './PlaneButton';

const {width} = Dimensions.get('window');
export const InventoryGroupComponent = ({
  showText = false,
  rightText,
  onPress,
  user = false,
  OnFullPress,
}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={OnFullPress}
        style={styles.inventoryGroupWrapper}>
        {user ? (
          <View>
            <Text style={styles.groupTitle}>{labels.groupTitle}</Text>
            <View style={{height: 10}} />
            <Text style={styles.itemTitle}>{`items : item1 , item2`}</Text>
          </View>
        ) : (
          <Text style={styles.groupTitle}>{labels.groupTitle}</Text>
        )}
        {showText ? (
          <Text style={styles.rightTextStyle}>{rightText}</Text>
        ) : (
          <PlaneButtonComponent
            btnText={user ? labels.reserve : labels.sendToMaintaince}
            onPress={onPress}
            Width={width / 3}
            btnHeight={user ? 40 : 50}
          />
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  inventoryGroupWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.2,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 100,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    color: '#333',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'left',
    color: '#333',
  },
  rightTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    color: 'red',
  },
});

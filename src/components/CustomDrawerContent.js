import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FeatureIcons from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {labels} from '../config/labels';
import {AuthDetailMethod} from '../store/actions/AuthActions';

export const CustomDrawerContentComponent = ({navigation}) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(AuthDetailMethod(null));
    navigation.navigate('Login');
  };
  return (
    <View style={styles.drawerContentWrapper}>
      <View style={styles.height23} />
      <TouchableOpacity onPress={() => navigation?.closeDrawer()}>
        <FeatureIcons
          name={'align-justify'}
          size={30}
          color="lightgrey"
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => navigation.navigate('Clearance')}>
          <Text style={styles.menuItemText}>{labels.clearnce}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => logout()}>
          <Text style={styles.menuItemText}>{labels.logout}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContentWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  height23: {
    height: 50,
  },
  menuIcon: {
    marginLeft: 20,
  },
  menuItem: {
    marginLeft: 20,
    marginTop: 25,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    color: 'grey',
    marginBottom: 5,
  },
});

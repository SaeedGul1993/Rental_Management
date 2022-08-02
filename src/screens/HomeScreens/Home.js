import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomHeaderComponent} from '../../components/CustomHeader';
import {CustomTabComponent} from '../../components/CustomTab';
import JobSection from './Job';
import {
  maintenanceTabArray,
  superTabArray,
  tabArray,
  userTabArray,
} from '../../config/localData';
import ClearanceSection from './Clearance';
import {labels} from '../../config/labels';
import InventorySection from './Inventory';
import {CustomModalComponent} from '../../components/Modal';
import {ModalContent} from './ModalChildern';
import RentalHistoryScreen from '../DrawerScreens/RentalHistory';
import {useSelector} from 'react-redux';
import DriverTodoList from './DriverTodoList';
import CurrentScreen from './Current';
import {CustomUserReservationModal} from './UserReservationModal';

const HomeScreen = ({navigation}) => {
  // declare all states here
  const {userDetail} = useSelector(state => state?.Auth);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tab, setTab] = useState(
    userDetail === labels.user
      ? labels.inventory
      : userDetail === labels.maintenance
      ? labels.current
      : labels.jobs,
  );
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModal2, setVisibleModal2] = useState(false);

  console.log('userDetail', userDetail, tab);
  return (
    <View style={styles.homeWrapper}>
      <CustomHeaderComponent onPress={() => navigation.openDrawer()} />
      {userDetail === labels.driverApp ? null : (
        <CustomTabComponent
          selectedIndex={selectedIndex}
          onPress={(e, name) => {
            setSelectedIndex(e);
            setTab(name);
          }}
          tabArray={
            userDetail === labels.supervisor.toLowerCase()
              ? superTabArray
              : userDetail === labels.maintenance
              ? maintenanceTabArray
              : userDetail === labels.user
              ? userTabArray
              : tabArray
          }
        />
      )}
      <View style={styles.height_1(5)} />
      {userDetail === labels.driverApp ? (
        <DriverTodoList navigation={navigation} />
      ) : tab === labels.jobs ? (
        <JobSection
          navigation={navigation}
          user={userDetail === labels.user ? true : false}
          supervisor={
            userDetail === labels.supervisor.toLowerCase() ? true : false
          }
        />
      ) : tab === labels.rentalHistory ? (
        <RentalHistoryScreen />
      ) : tab === labels.current ? (
        <CurrentScreen navigation={navigation} />
      ) : tab === labels.past ? (
        <CurrentScreen navigation={navigation} />
      ) : (
        <InventorySection
          navigation={navigation}
          onPress={() => {
            if (userDetail === labels.user) {
              setVisibleModal2(true);
            } else {
              setVisibleModal(true);
            }
          }}
          user={userDetail === labels.user ? true : false}
        />
      )}
      <CustomModalComponent
        setVisible={setVisibleModal}
        visible={visibleModal}
        childern={<ModalContent onPress={() => setVisibleModal(false)} />}
      />
      <CustomModalComponent
        setVisible={setVisibleModal2}
        visible={visibleModal2}
        childern={
          <CustomUserReservationModal onPress={() => setVisibleModal2(false)} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
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
});

export default HomeScreen;

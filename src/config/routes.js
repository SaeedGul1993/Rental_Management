import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../screens/AuthScreens/Login';
import {CustomDrawerContentComponent} from '../components/CustomDrawerContent';
import RentalHistoryScreen from '../screens/DrawerScreens/RentalHistory';
import HomeScreen from '../screens/HomeScreens/Home';
import CreateJobsScreen from '../screens/HomeScreens/CreateJobs';
import JobDetailScreen from '../screens/HomeScreens/JobDetails';
import ClearanceSection from '../screens/HomeScreens/Clearance';
import AssignJobScreen from '../screens/HomeScreens/AssignJob';
import DriverJobDetail from '../screens/HomeScreens/DriverJobDetail';
import ScannerScreen from '../screens/HomeScreens/ScannerScreen';
import UploadPictureScreen from '../screens/HomeScreens/UploadPicture';
import CurrentJobDetail from '../screens/HomeScreens/CurrentJobDetail';
import UserGroupDetails from '../screens/HomeScreens/UserGroupDetail';
// here we define stack navigator

const AuthStack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();
const AppStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
};

const DrawerSctackScreen = () => {
  return (
    <DrawerStack.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => <CustomDrawerContentComponent {...props} />}>
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="RentatHistory"
        component={RentalHistoryScreen}
      />
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="Clearance"
        component={ClearanceSection}
      />
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="CreateJob"
        component={CreateJobsScreen}
      />
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="JobDetailScreen"
        component={JobDetailScreen}
      />
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="AssignJobScreen"
        component={AssignJobScreen}
      />
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="DriverJobDetail"
        component={DriverJobDetail}
      />
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="ScannerScreen"
        component={ScannerScreen}
      />
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="UploadPictureScreen"
        component={UploadPictureScreen}
      />
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="CurrentJobDetail"
        component={CurrentJobDetail}
      />
      <DrawerStack.Screen
        options={{headerShown: false}}
        name="UserGroupDetails"
        component={UserGroupDetails}
      />
    </DrawerStack.Navigator>
  );
};

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName="AuthStack">
      <AppStack.Screen
        options={{headerShown: false}}
        name="AuthStack"
        component={AuthStackScreen}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="DrawerStack"
        component={DrawerSctackScreen}
      />
    </AppStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;

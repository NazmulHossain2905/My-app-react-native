import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import below tab navigation
import TabNavigation from './TabNavigation';

// import below all screens
import SocialShareScreen from '../screens/SocialShareScreen';
import LottieScreen from '../screens/LottieScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen1 from '../screens/LoginScreen1';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Social" component={SocialShareScreen} />
      <Drawer.Screen name="Lottie" component={LottieScreen} />
      <Drawer.Screen name="GMap" component={DetailsScreen} />
      <Drawer.Screen name="Login1" component={LoginScreen1} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

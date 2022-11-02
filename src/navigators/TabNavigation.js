import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import below all screens
import SwiperScreen from '../screens/SwiperScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Swiper"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Swiper" component={SwiperScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

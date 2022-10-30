import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import SocialShareScreen from './src/screens/SocialShareScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#1390ff'} barStyle="light-content" />
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Share"
          component={SocialShareScreen}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: false,
            // headerLeft: () => null,
            // headerTransparent: true,
            // headerTintColor: '#fff',
            // headerBackgroundContainerStyle: {
            //   backgroundColor: '#1390ff',
            // },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#f00',
    fontFamily: 'Poppins-Light',
  },
});

export default App;

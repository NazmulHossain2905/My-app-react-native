import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

// import stack navigators
import AuthStackNavigation from './src/navigators/AuthStackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#1390ff'} barStyle="light-content" />
      <AuthStackNavigation />
    </NavigationContainer>
  );
};

export default App;

import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  // when user click on login button
  const checkUserIsLoggedIn = async () => {
    try {
      const getUserData = await AsyncStorage.getItem('@userData');
      navigation.replace(getUserData != null ? 'Share' : 'Login');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      checkUserIsLoggedIn();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  text: {
    fontSize: 30,
    color: 'red',
  },
});

export default SplashScreen;

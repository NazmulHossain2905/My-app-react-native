import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Button} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailsScreen = ({navigation}) => {
  const logout = async () => {
    await AsyncStorage.removeItem('@userData');
    navigation.replace('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Button title="Log Out" onPress={logout} />
      <AntDesign name="home" size={40} color="red" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#f30',
    fontWeight: 'bold',
  },
});

export default DetailsScreen;

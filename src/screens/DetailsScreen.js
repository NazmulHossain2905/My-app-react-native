import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
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

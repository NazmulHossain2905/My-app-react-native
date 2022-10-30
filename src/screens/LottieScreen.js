import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Lottie from 'lottie-react-native';

const LottieScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Lottie
          source={require('../assets/lottieFiles/flying-bird.json')}
          autoPlay
          loop
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Lottie
          style={{marginTop: 60}}
          source={require('../assets/lottieFiles/running-orange.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#f00',
    fontWeight: 'bold',
  },
});

export default LottieScreen;

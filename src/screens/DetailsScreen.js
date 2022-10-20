import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Button} from 'react-native';

import MapView from 'react-native-maps';

const DetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <MapView
        // onRegionChange={v => console.log(v)}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 48.85691728176082,
          longitude: 2.3532377365677513,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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

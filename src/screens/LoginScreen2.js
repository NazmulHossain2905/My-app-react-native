import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LoginScreen2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 21,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default LoginScreen2;

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const handleLogin = navigation => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SignUp To My App</Text>
      <TextInput style={styles.input} placeholder="Enter your full name" />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your phone no."
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
          <Text style={styles.btnText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={() => handleLogin(navigation)}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 15,
    fontSize: 16,
    marginBottom: 12,
    color: '#111',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  btn: {
    width: '45%',
    backgroundColor: '#ffd700',
    padding: 15,
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#111',
    textAlign: 'center',
  },
});

export default LoginScreen;

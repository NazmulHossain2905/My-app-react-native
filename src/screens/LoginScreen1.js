import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bigCircle} />
      <View style={styles.mediumCircle} />
      <View style={styles.loginCardContainer}>
        <View style={styles.chatIcon}>
          <AntDesign name="wechat" size={55} color="#fff" />
        </View>
        <Text style={styles.loginText}>Login</Text>
        <Input title="Email" />
        <Input title="Password" />
        <Button title="Login" />
        <TouchableOpacity style={{marginTop: 15}}>
          <Text style={styles.text}>Don't have an account? Register Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginBottom: 10}}>
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigCircle: {
    backgroundColor: '#f00',
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    position: 'absolute',
    top: -40,
    left: -230,
    opacity: 0.7,
  },
  mediumCircle: {
    backgroundColor: '#00f',
    width: 340,
    height: 340,
    borderRadius: 340 / 2,
    position: 'absolute',
    bottom: -100,
    right: -100,
    opacity: 0.7,
  },
  loginCardContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: Dimensions.get('window').width - 70,
    elevation: 12,
  },
  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    paddingBottom: 6,
    borderBottomColor: '#444',
    borderBottomWidth: 0.5,
    marginTop: 40,
  },
  chatIcon: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -50,
    right: '40%',
  },
  text: {
    fontSize: 16,
    color: '#222',
    textAlign: 'center',
  },
});

export default LoginScreen1;

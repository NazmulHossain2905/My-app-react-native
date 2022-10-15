import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /* ****************** */
  /* input field validation state */
  /* ****************** */
  const [isFullNameError, setIsFullNameError] = useState(false);
  const [isUserNameError, setIsUserNameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);

  // object of user data
  const userData = {
    fullName: fullName,
    userName: userName.trim(),
    password: password.trim(),
  };

  // set user data on local storage
  const handleSubmit = async () => {
    if (
      userName != '' &&
      password != '' &&
      fullName != '' &&
      confirmPassword != ''
    ) {
      try {
        await AsyncStorage.setItem('@userData', JSON.stringify(userData));
        navigation.replace('Details');
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsFullNameError(true);
      setIsUserNameError(true);
      setIsPasswordError(true);
      setIsConfirmPasswordError(true);
    }
  };

  // when user click on login button
  const handleLogin = navigation => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SignUp To My App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        onChangeText={fullName => setFullName(fullName)}
        value={fullName}
      />
      {/* check input full name validation */}
      {fullName.length < 1 && isFullNameError ? (
        <Text style={styles.errorText}>Please enter your full name</Text>
      ) : fullName.length < 3 && isFullNameError ? (
        <Text style={styles.errorText}>
          Please write your name at last 3 char
        </Text>
      ) : (
        ''
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter your Username"
        onChangeText={userName => setUserName(userName)}
        value={userName}
      />

      {/* check input username validation */}
      {userName < 1 && isUserNameError ? (
        <Text style={styles.errorText}>Please enter your username</Text>
      ) : (
        ''
      )}

      {/* <TextInput
        style={styles.input}
        placeholder="Enter your phone no."
        keyboardType="number-pad"
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={password => setPassword(password)}
        value={password}
      />
      {/* check input password validation */}
      {password < 1 && isPasswordError ? (
        <Text style={styles.errorText}>Please enter your password</Text>
      ) : password.length < 8 && isFullNameError ? (
        <Text style={styles.errorText}>
          Please write password minimum 8 char.
        </Text>
      ) : (
        ''
      )}

      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        value={confirmPassword}
      />
      {/* check input password validation */}
      {confirmPassword == '' && isConfirmPasswordError ? (
        <Text style={styles.errorText}>Please enter your confirm password</Text>
      ) : password !== confirmPassword && confirmPassword != '' ? (
        <Text style={styles.errorText}>Your password not match.</Text>
      ) : (
        ''
      )}

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.5}
          onPress={handleSubmit}>
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
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 15,
    fontSize: 16,
    marginTop: 12,
    color: '#111',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 12,
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

  // Error Text
  errorText: {
    width: '90%',
    fontSize: 14,
    color: '#fefefe',
    fontFamily: 'Poppins-Medium',
    textAlign: 'left',
  },
});

export default LoginScreen;

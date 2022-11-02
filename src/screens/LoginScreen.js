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
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // user data obj formate
  const [userDataObj, setUserDataObj] = useState({});

  /* ****************** */
  /* input field validation state */
  /* ****************** */
  const [isUserNameError, setIsUserNameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  // when username or password in not correct
  const [userNameIsNotCorrect, setUserNameIsNotCorrect] = useState(false);
  const [passwordIsNotCorrect, setPasswordIsNotCorrect] = useState(false);

  const handleSignUp = navigation => {
    navigation.navigate('SignUp');
  };

  // set in correct username and password
  function testUP() {
    setUserNameIsNotCorrect(true);
    setPasswordIsNotCorrect(true);
  }

  // when user click on login button
  const handleLogin = async () => {
    if (userName != '' && password != '') {
      try {
        const getUserData = await AsyncStorage.getItem('@userData');
        let userDataObj = getUserData != null ? JSON.parse(getUserData) : null;
        setUserDataObj(userDataObj);

        userName == userDataObj.userName && password == userDataObj.password
          ? navigation.replace('Drawer')
          : testUP();
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsUserNameError(true);
      setIsPasswordError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login To My App</Text>
      <TextInput
        placeholderTextColor={'grey'}
        style={styles.input}
        placeholder="Enter your username"
        onChangeText={userName => setUserName(userName)}
        value={userName}
        autoCapitalize="none"
      />

      {/* check input username validation */}
      {userName < 1 && isUserNameError ? (
        <Text style={styles.errorText}>Please enter your username.</Text>
      ) : userName != userDataObj?.userName && userNameIsNotCorrect ? (
        <Text style={styles.errorText}>Username is not correct.</Text>
      ) : (
        ''
      )}

      <TextInput
        placeholderTextColor={'grey'}
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={password => setPassword(password)}
        value={password}
      />

      {/* check input password validation */}
      {password < 1 && isPasswordError ? (
        <Text style={styles.errorText}>Please enter your password.</Text>
      ) : password != userDataObj?.password && passwordIsNotCorrect ? (
        <Text style={styles.errorText}>Password is not correct.</Text>
      ) : (
        ''
      )}

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.5}
          onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={() => handleSignUp(navigation)}>
          <Text style={styles.btnText}>SignUp</Text>
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

// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// const LoginScreen = ({navigation}) => {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   // user data obj formate
//   const [userDataObj, setUserDataObj] = useState({});

//   /* ****************** */
//   /* input field validation state */
//   /* ****************** */
//   const [isUserNameError, setIsUserNameError] = useState(false);
//   const [isPasswordError, setIsPasswordError] = useState(false);

//   // when username or password in not correct
//   const [userNameIsNotCorrect, setUserNameIsNotCorrect] = useState(false);
//   const [passwordIsNotCorrect, setPasswordIsNotCorrect] = useState(false);

//   // when user account not found
//   const [ifNotAccountFound, setIfNotAccountFound] = useState(false);

//   const handleSignUp = navigation => {
//     navigation.navigate('SignUp');
//   };

//   // set in correct username and password
//   function testUP() {
//     setUserNameIsNotCorrect(true);
//     setPasswordIsNotCorrect(true);
//   }

//   // when user click on login button
//   const handleLogin = async () => {
//     if (userName != '' && password != '') {
//       try {
//         const getUserData = await AsyncStorage.getItem('@userData');
//         if (getUserData != null) {
//           userName == userDataObj.userName && password == userDataObj.password
//             ? navigation.replace('Details')
//             : testUP();
//         } else {
//           setIfNotAccountFound(true);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       setIsUserNameError(true);
//       setIsPasswordError(true);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>Login To My App</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your username"
//         onChangeText={userName => setUserName(userName)}
//         value={userName}
//         autoCapitalize="none"
//       />

//       {/* check input username validation */}
//       {userName < 1 && isUserNameError ? (
//         <Text style={styles.errorText}>Please enter your username.</Text>
//       ) : userName != userDataObj.userName && userNameIsNotCorrect ? (
//         <Text style={styles.errorText}>Username is not correct.</Text>
//       ) : (
//         ''
//       )}

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         secureTextEntry
//         onChangeText={password => setPassword(password)}
//         value={password}
//       />

//       {/* check input password validation */}
//       {password < 1 && isPasswordError ? (
//         <Text style={styles.errorText}>Please enter your password.</Text>
//       ) : password != userDataObj.password && passwordIsNotCorrect ? (
//         <Text style={styles.errorText}>Password is not correct.</Text>
//       ) : ifNotAccountFound ? (
//         <Text style={styles.errorText}>
//           Can't find any account of this username.
//         </Text>
//       ) : (
//         ''
//       )}

//       <View style={styles.btnContainer}>
//         <TouchableOpacity
//           style={styles.btn}
//           activeOpacity={0.5}
//           onPress={handleLogin}>
//           <Text style={styles.btnText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.btn}
//           onPress={() => handleSignUp(navigation)}>
//           <Text style={styles.btnText}>SignUp</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#1e90ff',
//   },
//   text: {
//     fontSize: 24,
//     color: '#fff',
//     fontFamily: 'Poppins-Bold',
//   },
//   input: {
//     backgroundColor: '#fff',
//     width: '90%',
//     padding: 15,
//     fontSize: 16,
//     marginTop: 12,
//     color: '#111',
//   },
//   btnContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '90%',
//     marginTop: 12,
//   },
//   btn: {
//     width: '45%',
//     backgroundColor: '#ffd700',
//     padding: 15,
//   },
//   btnText: {
//     fontSize: 16,
//     fontFamily: 'Poppins-SemiBold',
//     color: '#111',
//     textAlign: 'center',
//   },

//   // Error Text
//   errorText: {
//     width: '90%',
//     fontSize: 14,
//     color: '#fefefe',
//     fontFamily: 'Poppins-Medium',
//     textAlign: 'left',
//   },
// });

// export default LoginScreen;

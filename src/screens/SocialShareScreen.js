import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Share from 'react-native-share';

const SocialShareScreen = () => {
  const onlyTextShare = async () => {
    const options = {
      message: 'this is a message',
    };
    try {
      const shareResponse = await Share.open(options);
      console.log(JSON.stringify(shareResponse));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          color: '#F00',
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Share Social Screen
      </Text>
      <Pressable
        onPress={onlyTextShare}
        style={({pressed}) => [
          styles.pressableBtn,
          {backgroundColor: pressed ? '#000000' : '#f00'},
        ]}
        android_ripple={{color: '#ff0'}}>
        <Text style={styles.btnText}>Share only text</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          styles.pressableBtn,
          {backgroundColor: pressed ? '#000000' : '#f00'},
        ]}
        android_ripple={{color: '#ff0'}}>
        <Text style={styles.btnText}>Share image</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          styles.pressableBtn,
          {backgroundColor: pressed ? '#000000' : '#f00'},
        ]}
        android_ripple={{color: '#ff0'}}>
        <Text style={styles.btnText}>Share text and image</Text>
      </Pressable>
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
  pressableBtn: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SocialShareScreen;

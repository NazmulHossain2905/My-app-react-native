import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import Swiper from 'react-native-swiper';

const SwiperScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{height: 250, margin: 10, overflow: 'hidden', borderRadius: 10}}>
        <Swiper horizontal={true} autoplay={true} style={styles.wrapper}>
          <View style={styles.slide}>
            <Image
              style={styles.slideImage}
              source={require('../assets/images/food1.jpg')}
            />
          </View>

          <View style={styles.slide}>
            <Image
              style={styles.slideImage}
              source={require('../assets/images/food2.jpg')}
            />
          </View>

          <View style={styles.slide}>
            <Image
              style={styles.slideImage}
              source={require('../assets/images/food3.jpg')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.slideImage}
              source={require('../assets/images/food4.jpg')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.slideImage}
              source={require('../assets/images/food5.jpg')}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>React Native Swiper</Text>
        <Pressable
          style={({pressed}) => [
            styles.buttonContainer,
            {backgroundColor: pressed ? '#f00' : '#1390ff'},
          ]}
          android_ripple={{color: '#333'}}>
          <Text style={styles.buttonText}>Button</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {},
  slide: {
    height: 250,
    borderRadius: 10,
  },
  slideImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
    color: '#1390ff',
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SwiperScreen;

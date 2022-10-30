import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import MapView, {Marker, Callout} from 'react-native-maps';
import {markers} from '../utils/mapData';

const DetailsScreen = ({navigation}) => {
  const initialMapState = {
    markers,
    categories: [
      {
        name: 'Fastfood Center',
        icon: (
          <MaterialCommunityIcons
            style={styles.chipsIcon}
            name="food-fork-drink"
            size={18}
            color="#000"
          />
        ),
      },
      {
        name: 'Restaurant',
        icon: (
          <Ionicons
            name="ios-restaurant"
            style={styles.chipsIcon}
            size={18}
            color={'#000'}
          />
        ),
      },
      {
        name: 'Dineouts',
        icon: (
          <Ionicons
            name="md-restaurant"
            style={styles.chipsIcon}
            size={18}
            color="#000"
          />
        ),
      },
      {
        name: 'Snacks Corner',
        icon: (
          <MaterialCommunityIcons
            name="food"
            style={styles.chipsIcon}
            color={'#000'}
            size={18}
          />
        ),
      },
      {
        name: 'Hotel',
        icon: (
          <Fontisto
            name="hotel"
            style={styles.chipsIcon}
            size={15}
            color={'#000'}
          />
        ),
      },
    ],
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  const [state, setState] = React.useState(initialMapState);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        // onRegionChange={v => console.log(v)}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 48.85691728176082,
          longitude: 2.3532377365677513,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 48.85691728176082,
            longitude: 2.3532377365677513,
          }}
          title="Alhamdulillah!"
          description="Allah is Mohan!"
          image={require('../assets/images/location-big.png')}>
          <Callout tooltip>
            <View style={styles.mapBoxContainer}>
              <Text style={styles.title}>Alhamdulillah!</Text>
              <Text style={styles.description}>
                Allah is Mohan! Ami Allahoke valobasi.
              </Text>
              <Image
                resizeMode="contain"
                style={styles.img}
                source={require('../assets/images/food1.jpg')}
              />
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.searchBoxContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.searchBox}
          placeholderTextColor="#000"
        />
        <AntDesign name="search1" size={20} color={'#000'} />
      </View>

      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.chipsScrollView}
        contentInset={{
          // only ios
          top: 0,
          left: 0,
          right: 20,
          bottom: 0,
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS == 'android' ? 20 : 0,
        }}>
        {state.categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.chipsItem}>
            {category.icon}
            <Text style={{color: '#000'}}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {state.markers.map((marker, index) => {
          return (
            <View
              style={{
                width: 300,
                height: 200,
                backgroundColor: '#fff',
                marginHorizontal: 5,
                borderRadius: 8,
                overflow: 'hidden',
              }}
              key={index}>
              <Image
                style={{width: '100%', height: '100%', flex: 3}}
                source={marker.image}
              />
              <View style={{padding: 10}}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {marker.title}
                </Text>
                <Text
                  style={{
                    color: '#666',
                    fontSize: 12,
                  }}>
                  {marker.description}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
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
  mapBoxContainer: {
    width: 170,
    height: 200,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  description: {
    color: 'grey',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  img: {
    height: 60,
    width: 60,
  },
  searchBoxContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 10,
    left: 15,
    right: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
  },
  searchBox: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 70,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
  },
});

export default DetailsScreen;

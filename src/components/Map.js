import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const {width} = Dimensions.get('window');
const customStyle = [
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#878787',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f9f5ed',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#aee0f4',
      },
    ],
  },
];
const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 150,
    width: width / 1.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
});
export const MapComponent = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      customMapStyle={customStyle}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        draggable={true}
      />
    </MapView>
  </View>
);

import React, {useState, useRef, useCallback} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Config from 'react-native-config';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {getCurrentLocation, locationPermission} from '../utils/locationService';
import ShopPinImage from '../assets/Shop_Pin.png';
import SecondaryNavBar from './../components/SecondaryNavBar';
import COLORS from './../const/colors';
import CustomCallout from './CustomCallOut';
import {useFocusEffect} from '@react-navigation/native';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAP_KEY = Config.GM_API_KEY;
const PAGE_TITLE = 'Map View';

const MapPage = ({navigation, route}) => {
  const {data = {}} = route?.params || {};
  const {
    title = '',
    rating = 0,
    latitude = 0,
    longitude = 0,
    images = [],
  } = data;
  const mapRef = useRef();
  const destination = {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  };
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.3318456,
    longitude: -122.0296002,
  });

  useFocusEffect(
    useCallback(() => {
      getLiveLocation();
      return () => {
        navigation.setParams({data: {}});
      };
    }, []),
  );

  const getLiveLocation = async () => {
    const locPermissionGranted = await locationPermission();
    if (locPermissionGranted) {
      const {latitude, longitude} = await getCurrentLocation();
      setCurrentLocation({
        latitude: latitude,
        longitude: longitude,
      });
    }
  };

  return (
    <>
      <SecondaryNavBar title={PAGE_TITLE} />
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          showsUserLocation={true}
          tintColor={COLORS.green}
          region={{
            ...currentLocation,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          {Object.keys(destination).length > 0 && (
            <>
              <Marker coordinate={destination} icon={ShopPinImage}>
                
                <CustomCallout
                  imageUrl={images[0]?.url}
                  title={title}
                  rating={rating}
                />
              </Marker>
              <MapViewDirections
                origin={currentLocation}
                destination={destination}
                apikey={GOOGLE_MAP_KEY}
                strokeWidth={6}
                strokeColor={COLORS.green}
                optimizeWaypoints={false}
                onError={errorMessage => {
                  // console.log('GOT AN ERROR');
                }}
              />
            </>
          )}
        </MapView>
      </View>
    </>
  );
};

export default MapPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  bottomCard: {
    backgroundColor: COLORS.white,
    width: '100%',
    padding: 30,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
  inpuStyle: {
    backgroundColor: COLORS.white,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    marginTop: 16,
  },
  mapStyle: {
    padding: 6,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: COLORS.white,
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: COLORS.arrowBorderColor,
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
});

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Rating from './Rating';
import FoodImage from '../assets/FoodImage.png';
import MapImage from '../assets/map.png';
import COLORS from './../const/colors';

const Card = ({data = {}}) => {
  const navigation = useNavigation();
  const {title = '', rating = 0} = data;

  const onPress = () =>
    navigation.navigate('Map', {
      data,
    });

  return (
    <View style={[styles.container]}>
      <Image
        source={FoodImage}
        style={[styles.imageStyle]}
        resizeMode={'cover'}
      />
      <View style={styles.contentBox}>
        <Text style={styles.textStyle}>{title}</Text>
        <Rating value={rating} style={styles.ratingStyle} />
      </View>
      <TouchableOpacity style={styles.mapBox} onPress={onPress}>
        <Image
          source={MapImage}
          style={styles.mapImageStyle}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,

    borderColor: COLORS.lightGrey,
    shadowColor: COLORS.black,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 2,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  imageStyle: {
    height: 60,
    width: 60,
    borderRadius: 4,
  },
  contentBox: {
    flex: 1,
    marginHorizontal: 20,
  },
  ratingStyle: {
    marginTop: 5,
  },
  mapBox: {
    height: 40,
    width: 40,
    // marginRight: 10,
    borderRadius: 4,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImageStyle: {
    width: 20,
    height: 20,
  },
});

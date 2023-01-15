import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import EmptyStarImage from '../assets/Empty_Star.png';
import FullStarImage from '../assets/Full_Star.png';
import HalfStarImage from '../assets/Half_Star.png';

const TOTAL_RATING = 5;

const Rating = ({value = 4, style = {}}) => {
  return (
    <View style={[styles.container, style]}>
      {Array.from({length: TOTAL_RATING}, (v, i) => i + 1).map((e, i) => {
        return (
          <Image
            style={styles.image}
            key={i}
            source={
              value >= e
                ? FullStarImage
                : value >= e - 0.5
                ? HalfStarImage
                : EmptyStarImage
            }
            resizeMode="cover"
          />
        );
      })}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 4,
  },
});

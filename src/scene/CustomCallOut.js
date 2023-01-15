import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Callout} from 'react-native-maps';
import {WebView} from 'react-native-webview';

import EmptyStarImage from '../assets/Empty_Star.png';
import FullStarImage from '../assets/Full_Star.png';
import HalfStarImage from '../assets/Half_Star.png';
import COLORS from '../const/colors';

const TOTAL_RATING = 5;

export const ImageWebView = ({imageUrl, style}) => (
  <WebView
    originWhitelist={['*']}
    source={{
      html: `<style>*{margin:0;padding:0;}</style><img src="${imageUrl}" style="width: 150; height: 150;border-radius:50%;padding-top:20px;"/>`,
    }}
    style={style}
  />
);

const CustomCallout = ({imageUrl = '', title = '', rating = 0}) => {
  return (
    <Callout style={styles.callout}>
      <View style={styles.imageViewStyle}>
        <ImageWebView imageUrl={imageUrl} style={styles.image} />
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.message}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          {Array.from({length: TOTAL_RATING}, (v, i) => i + 1).map((e, i) => {
            return (
              <Text key={i} style={{flex: 1}}>
                <Image
                  style={styles.imageStyle}
                  source={
                    rating >= e
                      ? FullStarImage
                      : rating >= e - 0.5
                      ? HalfStarImage
                      : EmptyStarImage
                  }
                  resizeMode="contain"
                />
              </Text>
            );
          })}
        </View>
      </View>
    </Callout>
  );
};
export default CustomCallout;

const styles = StyleSheet.create({
  message: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.black,
  },
  callout: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    width: 55,
    height: 55,
    margin: 0,
    padding: 0,
    backgroundColor: COLORS.white,
  },
  imageWrapper: {
    marginTop: -23,
    paddingBottom: 23,
    color: COLORS.black,
  },
  imageStyle: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  imageViewStyle: {
    alignItems: 'center',
    marginTop: 5,
  },
  rightContent: {
    flexDirection: 'column',
    marginLeft: -10,
  },
});

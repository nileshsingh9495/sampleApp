import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import COLORS from './../const/colors';

const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  if (!visible) return null;
  return (
    <View style={[styles.container, {height, width}]}>
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={COLORS.blue} />
        <Text style={styles.textStyle}>Loading...</Text>
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: COLORS.white,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  textStyle: {
    marginLeft: 10,
    fontSize: 16,
    color: COLORS.black,
  },
});

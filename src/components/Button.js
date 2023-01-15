import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import COLORS from '../const/colors';

const Button = ({title = '', onPress = () => {}}) => {
  if (!!!title) return null;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: '100%',
    backgroundColor: COLORS.green,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

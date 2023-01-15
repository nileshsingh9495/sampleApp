import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../const/colors'

const SecondaryNavBar = props => {
  const navigation = useNavigation();
  const {canGoBack, goBack, replace, push} = navigation;
  const {title = '', style = {}, layoutStyle = {}} = props;

  if (!!!title) return null;

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.layout, layoutStyle]} />
        <View style={styles.headerView}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              if (canGoBack()) {
                goBack();
              } else {
                replace('List');
              }
            }}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={[styles.title]} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
    </>
  );
};

export default SecondaryNavBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 50,
    backgroundColor: 'transparent',
    zIndex: 2,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  layout: {
    height: 50,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.green,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    height: '100%',
    padding: 14,
    flex: 1,
  },
  headerView: {
    height: 50,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  title: {
    flex: 1,
    fontSize: 18,
    lineHeight: 17,
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.white,
  },
  backText: {
    fontSize: 12,
    color: COLORS.white,
  },
});

import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListingPage from './ListingPage';
import MapPage from './MapPage';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: '#3777de',
        tabBarIconStyle: styles.tabBarIconStyle,
      }}>
      <Tab.Screen name="List" component={ListingPage} />
      <Tab.Screen name="Map" component={MapPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontWeight: '700',
    fontSize: 16,
  },
  tabBarIconStyle: {
    display: 'none',
  },
});

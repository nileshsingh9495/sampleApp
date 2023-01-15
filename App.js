import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppSettings from './src/AppSettings';
import BottomTabNavigator from './src/scene/BottomTabNavigator';
import configureStore from './src/redux-store/store';
import rootSaga from './src/redux-store/root.saga';
import LoginPage from './src/scene/LoginPage';
import FlashMessage from 'react-native-flash-message';

const store = configureStore();
store.runSaga(rootSaga);

const Stack = createNativeStackNavigator();

const genericStackOptions = {
  headerShown: false,
  animationEnabled: false,
};
LogBox.ignoreAllLogs();

const AppShell = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppSettings />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={genericStackOptions}
          initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="bottom" />
    </SafeAreaView>
  );
};

const App = props => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppShell {...props} />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

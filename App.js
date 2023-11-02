import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
} from 'react-native';
import ContactScreen from './components/ContactScreen'
import AppNavigator from './src/AppNavigator';

const App = () => {
  return (
      <AppNavigator />
  );
};
export default App;



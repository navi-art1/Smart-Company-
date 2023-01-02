import { Button, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStack from './navigation/MainStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';


function App() {
  return (
      <>
        <MainStack/>
      </>
      
  );
};

export default App;




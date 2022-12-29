import { Button, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//screnns

import Huella from './screens/Huella';
import Main from './screens/Main';
import Manual from './screens/Manual';
import Red from './screens/Red';
import Voz from './screens/Voz';
import yellow from './screens/yellow';
import Green from './screens/Green';

const Drawer = createDrawerNavigator();




export default function App() {
  return (
      <NavigationContainer >
        <Drawer.Navigator useLegacyImplementation initialRouteName="Main">
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Green" component={Green} />
          <Drawer.Screen name="Huella" component={Huella} />
          <Drawer.Screen name="Manual" component={Manual} />
          <Drawer.Screen name="Red" component={Red} />
          <Drawer.Screen name="Voz" component={Voz} />
          <Drawer.Screen name="yellow" component={yellow} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}




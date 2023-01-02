import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Main from "../screens/Main";
import Green from "../screens/Green";
import Huella from "../screens/Huella";
import Manual from "../screens/Manual";
import Red from "../screens/Red";
import Yellow from "../screens/Yellow";
import Voz from "../screens/Voz";

const Stack = createNativeStackNavigator();

export default MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator useLegacyImplementation initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Green" component={Green} />
        <Stack.Screen name="Huella" component={Huella} />
        <Stack.Screen name="Manual" component={Manual} />
        <Stack.Screen name="Red" component={Red} />
        <Stack.Screen name="Voz" component={Voz} />
        <Stack.Screen name="Yellow" component={Yellow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


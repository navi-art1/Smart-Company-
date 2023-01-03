import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Main from "./screens/Main";
import Green from "./screens/Green";
import Huella from "./screens/Huella";
import Manual from "./screens/Manual";
import Red from "./screens/Red";
import Yellow from "./screens/Yellow";
import Voz from "./screens/Voz";

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator useLegacyImplementation initialRouteName="Main">
        {/*Vista principal*/}
        <Stack.Screen name="Main" component={Main} />
        {/*Se registro a tiempo*/}
        <Stack.Screen name="Green" component={Green} />
        {/*Vista de registro con huella dactilar */}
        <Stack.Screen name="Huella" component={Huella} />
        {/*Vista de registro manual */}
        <Stack.Screen name="Manual" component={Manual} />
        {/*Se registro con mucho retraso*/}
        <Stack.Screen name="Red" component={Red} />
        {/*Vista de registro por voz */}
        <Stack.Screen name="Voz" component={Voz} />
        {/*Se registro a con algo de retraso*/}
        <Stack.Screen name="Yellow" component={Yellow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

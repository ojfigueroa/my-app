import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../pantallas/Inicio';
import Login from '../pantallas/Login';
import CrearCuenta from '../pantallas/CrearCuenta';
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="inicio" component={Inicio} />
        <Stack.Screen name="crearcuenta" component={CrearCuenta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
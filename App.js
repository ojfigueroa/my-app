import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pantallas/Login'; //Instanciando pantalla login
import Inicio from './src/pantallas/Inicio'; //Instanciando pantalla inicio
import CrearCuenta from './src/pantallas/CrearCuenta'; //Instanciando cre
import AppNavigator from './src/componentes/AppNavigator';
import Calculadora from './src/pantallas/Calculadora'; //Instanciando calculadora
import NewPassword from './src/pantallas/NewPassword'; //Instanciando newpassword
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
    //Para utilizar la navegación con react-navigation
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff80',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

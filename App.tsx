import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View } from 'react-native';
import logo from './assets/eggi-logo.png'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './src/screens/SignIn/Index'
import SignUp from './src/screens/SignUp/Index'
import Home from './src/screens/Home/Index'
 
import ListarAveMorta from './src/screens/AveMorta/Listar'
import CriarAveMorta from './src/screens/AveMorta/Criar'
import EditarAveMorta from './src/screens/AveMorta/Editar'

import ListarOvoQuebrado from './src/screens/OvoQuebrado/Listar'
import CriarOvoQuebrado from './src/screens/OvoQuebrado/Criar'
import EditarOvoQuebrado from './src/screens/OvoQuebrado/Editar'

import { NativeBaseProvider } from 'native-base';
import { createServer } from "miragejs"



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />

          <Stack.Screen options={{ headerShown: false }} name="ListarAveMorta" component={ListarAveMorta} />
          <Stack.Screen options={{ headerShown: false }} name="CriarAveMorta" component={CriarAveMorta} />
          <Stack.Screen options={{ headerShown: false }} name="EditarAveMorta" component={EditarAveMorta} />

          <Stack.Screen options={{ headerShown: false }} name="ListarOvoQuebrado" component={ListarOvoQuebrado} />
          <Stack.Screen options={{ headerShown: false }} name="CriarOvoQuebrado" component={CriarOvoQuebrado} />
          <Stack.Screen options={{ headerShown: false }} name="EditarOvoQuebrado" component={EditarOvoQuebrado} />
          
          <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
          <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// export default function App() {
//   return (
//     <NativeBaseProvider>
//     </NativeBaseProvider>
//   );
// }

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/style/global/theme';

import { Home } from './src/Screens/home';

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';
import {
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

import AppLoading from 'expo-app-loading';
import { CarDetails } from './src/Screens/CarDetails';
import { Scheduling } from './src/Screens/Scheduling';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


export default function App() {

  const[fontsloaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  })

  if(!fontsloaded){
    return <AppLoading/>
  }

  return (
  
  <ThemeProvider theme={theme}> 
      <Scheduling/>
  </ThemeProvider>
   
  );
}

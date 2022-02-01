import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/style/global/theme';

import { Home } from './src/Screens/home';

import {} from '@expo-google-fonts/archivo';
import {} from '@expo-google-fonts/inter';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';



export default function App() {

  const[fontsloaded] = useFonts({

  })

  if(!fontsloaded){
    return <AppLoading/>
  }

  return (
  
  <ThemeProvider theme={theme}> 
      <Home/>
  </ThemeProvider>
   
  );
}

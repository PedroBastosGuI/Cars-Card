import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/style/global/theme';
import { Home } from './src/Screens/home';

export default function App() {
  return (
  
  <ThemeProvider theme={theme}> 
      <Home/>
  </ThemeProvider>
   
  );
}

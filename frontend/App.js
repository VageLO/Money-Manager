import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { 
  PaperProvider,
  MD3DarkTheme,
  MD3LightTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { LightScheme } from './src/theme/lightScheme.js'
import { DarkScheme } from './src/theme/darkScheme.js'
import BottomMenu from './src/components/bottomMenu.js';

const DarkTheme = {
  ...MD3DarkTheme,
  colors: {...DarkScheme.colors}
}

const LightTheme = {
  ...MD3LightTheme,
  colors: {...LightScheme.colors}
}

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView/>
        
        <NavigationContainer theme={theme}>
          <BottomMenu/>
        </NavigationContainer>

      </SafeAreaProvider>
    </PaperProvider>
  );
}
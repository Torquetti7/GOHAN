import React, { useEffect } from 'react';
import { StatusBar, LogBox, ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as NavigationBar from 'expo-navigation-bar';
import * as SystemUI from 'expo-system-ui';


export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs([
      'Text strings must be rendered within a <Text> component.',
      'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
      'Erro ao finalizar cadastro',
      'Erro ao salvar dados',
      'Erro ao verificar username',
      'Nenhum comentário encontrado no banco para esse usuário.',
      '[expo-image-picker] `ImagePicker.MediaTypeOptions` have been deprecated. Use `ImagePicker.MediaType` or an array of `ImagePicker.MediaType` instead.'
    ]);

    const configureNavigationBar = async () => {
      try {
        await NavigationBar.setButtonStyleAsync('light');
        await SystemUI.setBackgroundColorAsync('#FF0045');
      } catch (error) {
        console.warn('Erro ao configurar NavigationBar:', error);
      }
    };

    configureNavigationBar();
  }, []);

  return (
    
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="dark-content"
          />
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    
  );
}

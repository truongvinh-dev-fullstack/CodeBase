/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import { ToastConfig } from 'react-native-toast-message';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/constants/i18n/i18n';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();

  const toastConfig: ToastConfig = {
    success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'pink' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
      />
    ),
    error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
    tomatoToast: ({ text1, props }) => (
      <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    ),
  };

  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootNavigator />
          <Toast config={toastConfig} />
        </NavigationContainer>
      </SafeAreaProvider>
    </I18nextProvider>

  );
}

export default App;

//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, processColor, Text, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import {RootNavigator} from './src/navigators/RootNavigator'

function App(): React.JSX.Element {
  const colorScheme = useColorScheme()

  useEffect(() => {
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;

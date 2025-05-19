// src/screens/ExampleScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from '../navigators/BottomTabParamList';

type Props = NativeStackScreenProps<BottomTabParamList, 'SCREEN1'>;

const SCREEN1: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đây là màn hình screen 1</Text>
    </View>
  );
};

export default SCREEN1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});

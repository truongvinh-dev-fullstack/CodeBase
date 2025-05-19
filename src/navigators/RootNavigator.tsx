import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParamList ';
import DrawerTabNavigator from './DrawerTabNavigator';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
	useEffect(() => {
	}, []);

	return (
		<Navigator
			screenOptions={{ headerShown: false, gestureEnabled: false }}
			initialRouteName={'DRAWER'}
		>
			<Screen name="DRAWER" component={DrawerTabNavigator} />
		</Navigator>
	);
}

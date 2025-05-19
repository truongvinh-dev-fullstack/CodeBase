/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
// import { CustomDrawerContent } from './components';

const Drawer = createDrawerNavigator();

const DrawerTabNavigator = () => {
	return (
		<Drawer.Navigator
			// initialRouteName={'MAINTABS'}
			// drawerContent={() => <CustomDrawerContent />}
			screenOptions={{
				headerShown: false,
				lazy: true,
			}}>
			<Drawer.Screen name={'MAINTABS'} component={BottomTabNavigator} />
		</Drawer.Navigator>
	);
}
;
export default DrawerTabNavigator;

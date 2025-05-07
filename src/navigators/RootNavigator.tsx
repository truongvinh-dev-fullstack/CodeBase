import React, { useCallback, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './RootStackParamList '

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

export default function RootNavigator() {
	const [initialRouteName, setInitialRouteName] = useState<keyof RootStackParamList>()
	useEffect(() => {
	}, [])

	return initialRouteName ? (
		<Navigator
			screenOptions={{ headerShown: false, gestureEnabled: false }}
			initialRouteName={initialRouteName}
		>
			{/* <Screen name="Welcome" component={Screens.WelcomeScreen} /> */}

		</Navigator>
	) : null
}

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
import React from 'react';
import FastImage, { Source } from 'react-native-fast-image';
import { Platform, View } from 'react-native';
import { appColors } from './constants/color';

type TabButtonPropsType = {
	source: Source
	focused?: boolean
	count?: number | undefined
}

export const BottomTabButton: React.FC<TabButtonPropsType> = React.memo(({ source, focused }) => {
	return (
		<View>
			<FastImage
				source={source}
				style={[{height: 27, width: 27, marginTop: 5}, Platform?.OS == 'ios' ? {marginBottom: 5} : {}]}
				tintColor={focused ? appColors.main : appColors.gray_1}
			/>
		</View>
	);
});

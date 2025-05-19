/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { appColors } from '../../constants/color';
import { textStyles } from '../../themes';

type TabLaeblPropsType = {
	content: string
	focused?: boolean
}


export const BottomTabLabel: React.FC<TabLaeblPropsType> = React.memo(({ content, focused }) => {
	return (
		<Text
			allowFontScaling={false}
			style={{
				...textStyles.textNormalMedium,
				color: focused ? appColors.main : appColors.gray_3,
				fontSize: 13,
			}}>
			{content}
		</Text>
	);
});




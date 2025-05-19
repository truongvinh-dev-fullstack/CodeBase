import React from 'react';
import FastImage, { Source } from 'react-native-fast-image';
import { Platform, View, StyleSheet } from 'react-native';
import { appColors } from '../../constants';

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
				style={styles.icon}
				tintColor={focused ? appColors.main : appColors.gray_1}
			/>
		</View>
	);
});

const styles = StyleSheet.create({
    icon: {
		height: 27, width: 27, marginTop: 5,
		// eslint-disable-next-line eqeqeq
		marginBottom: Platform?.OS == 'ios' ? 5 : 0,
    },
  });



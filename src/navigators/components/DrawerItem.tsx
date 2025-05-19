/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	UIManager,
	LayoutAnimation,
	Platform,
} from 'react-native';
import React, { useState } from 'react';
import { Source } from 'react-native-fast-image';
import { Divider } from '../../components/divider';
import { appColors } from '../../constants';
import { textStyles } from '../../themes';
import AppIcon from '../../components/icons/Icon';
import { icons } from '../../assets/icons';
import { navigate } from '../NavigationService';

type ItemParentProps = {
	iconLeft?: Source
	textLeft?: string
	textRight?: string
	showChild?: boolean
	isChild?: boolean
	showChevron?: boolean
} & IDrawerItem

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const DrawerItem: React.FC<ItemParentProps> = React.memo(
	({ iconLeft, textLeft, textRight, showChild, isChild, showChevron = true, ...props }) => {
		const [isShowChild, setIsShowChild] = useState<boolean>(!!showChild);

		const onPressItem = () => {
			if (props?.childs?.length) {
				LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
				setIsShowChild((previos) => !previos);
			} else {
				if(props.routerName) {navigate(props.routerName);}
			}
		};

		return (
			<>
				<TouchableOpacity
					onPress={onPressItem}
					style={[!isChild ? styles.container : styles.containerChild, props?.isShow ? {} : { display: 'none' }]}>
					<View style={styles.viewRow}>
						{props.icon || null}
						<Text numberOfLines={1} adjustsFontSizeToFit={true} style={styles.textLabel}>
							{props.label}
						</Text>
					</View>
					{showChevron && props.childs && props.childs.length > 0 ? (
						<View style={styles.viewRow}>
							<AppIcon source={!isShowChild ? icons.ic_chevron_right : icons.ic_chevron_down} />
						</View>
					) : null}
				</TouchableOpacity>
				{isShowChild ? (
					<View style={styles.viewChild}>
						{props?.childs?.map?.((obj: IDrawerChildItem, i: number) => (
							<View key={obj.id}>
								<DrawerItem key={obj.id} showChevron={false} {...obj} isChild />
								{i !== (props?.childs?.length ?? 0) - 1 ? <Divider /> : null}
							</View>
						))}
					</View>
				) : null}
			</>
		);
	},
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderWidth: 1,
		paddingHorizontal: 8,
		paddingVertical: 10,
		borderColor: appColors.border,
		backgroundColor: appColors.drawer_item_bg,
		justifyContent: 'space-between',
		borderRadius: 6,
		marginTop: 12,
	},
	containerChild: {
		flexDirection: 'row',
		paddingHorizontal: 8,
		paddingVertical: 10,
		borderColor: appColors.border,
		justifyContent: 'space-between',
	},
	viewChild: {
		borderRadius: 6,
		borderWidth: 1,
		borderColor: appColors.border,
		marginLeft: 16,
		marginTop: 12,
		backgroundColor: appColors.drawer_item_bg,
	},
	viewRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	textLabel: {
		...textStyles.textNormalMedium, color: appColors.main, width: '90%',
	},
});

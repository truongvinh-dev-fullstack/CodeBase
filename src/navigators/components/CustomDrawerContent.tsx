/* eslint-disable eqeqeq */
import { Text, StyleSheet, ListRenderItem, FlatList, View, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Platform } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { DrawerItem } from '@react-navigation/drawer';
import { appConfig } from '../../constants';
import FastImage from 'react-native-fast-image';



export const CustomDrawerContent = () => {
	const isFocus = useIsFocused();
	const [drawerData, setDrawerData] = useState<Array<IDrawerItem>>([]);


	React.useEffect(() => {
		createDrawerData();
	}, [isFocus]);

	const createDrawerData = async () => {
		let _drawerData : IDrawerItem[] = [
			{
				label: 'Drawer 1',
				id: 1,
				icon: null,
				routerName: 'SCREEN1',
				childs: [
				],
			},
		];
		setDrawerData(_drawerData);
	};

	const renderItem: ListRenderItem<any> = useCallback(({ item, index }) => {
		return <DrawerItem key={'DrawerItem' + index} {...item} />;
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<ScrollView>
					<FastImage
						resizeMode="contain"
						style={styles.image}
					// source={images.img_header_drawer}
					/>
					<FlatList
						data={drawerData}
						scrollEnabled={false}
						renderItem={renderItem}
						keyExtractor={(item) => item.id.toString()}
					/>
				</ScrollView>
			</View>

			<Text style={styles.text_end}>
				Dong Tam Group - Phiên bản 1.0.3
			</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	item: {
		marginBottom: 12,
	},
	container: {
		height: appConfig.height - 30,
		paddingHorizontal: 16,
	},
	body: {
		height: appConfig.height - 70,
		marginBottom: 7,
	},
	image: {
		height: 60,
		width: '100%',
		marginBottom: 20,
		marginTop: Platform.OS == 'ios' ? 50 : 0,
	},
	text_end: {
		alignSelf: 'center',
		marginHorizontal: 22,
		textAlign: 'center',
	},
});

// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const StorageKey = {
	'TOKEN': 'TOKEN',
};
export class AsyncStorageService {
	clearStore = async () => {
		// await Promise.all(Object.keys(StoreKey).map(key => {
		//     removeItem(key);
		// }))
		AsyncStorage.clear();
	};
	getToken = async () => {
		var access_token = await AsyncStorage.getItem(StorageKey.TOKEN);
		return `Bearer ${access_token}`;
	};
	getItem = async (key: string) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				// We have data!!
				return JSON.parse(value);
			}
		} catch (error) {
			return null;
			// Error retrieving data
		}
	};
	removeItem = async (key: string) => {
		await AsyncStorage.removeItem(key);
	};
	logout = async () => {
		await AsyncStorage.clear();
		// await AsyncStorage.removeItem(StorageKey.USER_ID)
		// await AsyncStorage.removeItem(StorageKey.TOKEN)
	};
	setItem = async (key: string, val: any) => {
		try {
			await AsyncStorage.removeItem(key)
			await AsyncStorage.setItem(key, JSON.stringify(val))
		} catch (error) { }
	};
	setItemNumber = async ({ key, val }: { key: string; val: any }) => {
		try {
			await AsyncStorage.removeItem(key);
			await AsyncStorage.setItem(key, JSON.stringify(val));
		} catch (error) { }
	};
}
export const asyncStorageService = new AsyncStorageService();

import { ApisauceInstance, create } from 'apisauce';
import { ApiConfig, DEFAULT_API_CONFIG } from './api-config';
// import { UserApi } from './user-api';
import { AsyncStorageService } from '../storage/index';
/**
 * Manages all requests to the API.
 */
export class UnitOfWorkService {
	// private _userApi: UserApi | undefined;
	private apisauce: ApisauceInstance;
	private _storage: AsyncStorageService | undefined;
	/**
	 * Configurable options.
	 */
	private config: ApiConfig = DEFAULT_API_CONFIG;

	/**
	 * Creates the api.
	 *
	 * @param config The configuration to use.
	 */
	constructor() {
		this.apisauce = create({
			baseURL: this.config.url,
			timeout: this.config.timeout,
			headers: {
				Accept: 'application/json',
				// 'Origin': 'http://103.138.113.158:9909',
				'Content-Type': 'application/json',
				'Abp.TenantId': 3,
			},
		});
		this._storage = new AsyncStorageService();
	}

	/**
	 * Sets up the API.  This will be called during the bootup
	 * sequence and will happen before the first React component
	 * is mounted.
	 *
	 * Be as quick as possible in here.
	 */
	// get user(): UserApi {
	// 	if (!this._userApi) {
	// 		this._userApi = new UserApi(this.apisauce);
	// 	}
	// 	return this._userApi;
	// }

	get storage(): AsyncStorageService {
		if (!this._storage) {
			this._storage = new AsyncStorageService();
		}
		return this._storage;
	}
}

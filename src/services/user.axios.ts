import { UNPROTECTED_API } from "../constants/api.route";
import { CmuOAuthBasicInfo } from "../types";
import { coreApi } from "./base.axios";

export const getUserDataQuery = (): Promise<CmuOAuthBasicInfo> => {
	return new Promise((resolve, reject) => {
		coreApi
			.get<CmuOAuthBasicInfo>(UNPROTECTED_API.ME, {
				withCredentials: true,
			})
			.then((res) => resolve(res.data))
			.catch(reject);
	});
};

export const postUserLogout = () => {
	return new Promise((resolve, reject) => {
		coreApi
			.get(UNPROTECTED_API.LOGOUT, {
				withCredentials: true,
			})
			.then((res) => resolve(res.data))
			.catch(reject);
	});
};

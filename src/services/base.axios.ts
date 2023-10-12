import axios from "axios";

export const coreApi = axios.create({
	baseURL: import.meta.env.VITE_APP_API_PATH,
});

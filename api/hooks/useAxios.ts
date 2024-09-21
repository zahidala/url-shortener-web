import axios from "axios";

export const useAxios = () => {
	const instance = axios.create({
		baseURL: process.env.API_URL,
	});

	return instance;
};

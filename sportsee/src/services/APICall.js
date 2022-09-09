import axios from 'axios';
import { USER_MAIN_DATA } from "./APIMock";


const instance = axios.create({
	baseURL: 'http://localhost:3000/user',
});

/**
 * Gets user infos from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 export const getUserInfos = async (id) => {
	try {
		if (process.env.NODE_ENV == "production"){
			const res = await instance.get(`/${id}`);
			return res.data;
		} else {
			let data = USER_MAIN_DATA.find (el => el.id == id); 
			return data
		}
		
	} catch (e) {
		console.log(e);
	}
};

/**
 * Gets user performance from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 export const getUserPerformance = async (id) => {
	try {
		const res = await instance.get(`/${id}/performance`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Gets user activity from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 export const getUserActivity = async (id) => {
	try {
		const res = await instance.get(`/${id}/activity`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Gets user average sessions from the API
 *
 * @param {string} id User id
 * @returns {object} Response
 */
 export const getUserAverageSessions = async (id) => {
	try {
		const res = await instance.get(`/${id}/average-sessions`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};
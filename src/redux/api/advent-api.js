import axios from 'axios';

const API_KEY = '6657397f9f970b3b36c8732b';

const END_POINT = 'advert';

axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/api/v1`;
export const fetchAdvents = async () => {
	const { data } = await axios.get(`/${END_POINT}`);
	console.log(data);
	return data;
};

import axios from 'axios';
// import { API_HOST_URL } from '../shared/appConstant'


//axios return a prommise
const apiHelper = (method, url, data) => {
    const axios_promise = axios({
        method,
        url,
        data
    });
    return axios_promise ;
};
export default apiHelper;
import axios from 'axios';
// import { API_HOST_URL } from '../shared/appConstant'

//axios return a prommise
const apiHelper = (method, url, data) => {
    return axios({
        method,
        url,
        data
    });
};

export default apiHelper;
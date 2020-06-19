/*===================================
|| 
|| Universal Axios AJAX Api Calls
|| 
===================================*/
import axios from 'axios';
const baseURL = `http://localhost:5000/api`;
axios.create({ baseURL: baseURL });
export default axios;

/*---------------------------
| Standard Axios Call Wrapper
---------------------------*/
export const callAxios = (endpoint, callback) => {
    axios.get(baseURL + endpoint)
        .then((response) => {
            // console.log('AXIOS GET response', response);
            callback(response.data);
        })
        .catch((response) => {
            console.log('AXIOS Error: ', response);
        });
}

export const callAxiosPost = (endpoint, data, callback) => {
    axios.post(baseURL + endpoint, data)
        .then((response) => {
            // console.log('AXIOS POST response', response);
            callback(response.data);
        })
        .catch((response) => {
            console.log('AXIOS Post Error: ', response);
        });
}
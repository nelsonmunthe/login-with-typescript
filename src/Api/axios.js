import axios from 'axios';
const {REACT_APP_API_URL, REACT_APP_PORT}  = process.env;

const axiosPrivate = axios.create({
    baseURL: `${REACT_APP_API_URL}:${REACT_APP_PORT}`,
    headers: {
        'Content-Type' : 'application/json'
    },
    withCredentials: true
});


export default axiosPrivate
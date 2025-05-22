import axios from "axios"; 

const BASE_URL = "https://api.example.com"; // replace with your API base URL

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials= true ;

export default axiosInstance;
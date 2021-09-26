const devBaseURL = "https://127.0.0.1:7001/";
const proBaseURL = "https://innovise.top:7001/";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
 
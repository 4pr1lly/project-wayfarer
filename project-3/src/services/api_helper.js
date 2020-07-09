import axios from 'axios';

const api = axios.create({ baseURL: "http://localhost:3001" })

// ==================Auths===================//

export const signupUser = async (signupData) => {
    const userData = await api.post('/auth/signup', signupData);
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.data.user;
}

export const loginUser = async (loginData) => {
    const userData = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.data.user;
}

export const verifyUser = async() => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const userData = await api.get('/auth/verify');
        return userData.data;    
    } else {
        return false;
    }
}
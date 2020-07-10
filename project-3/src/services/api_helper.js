import axios from 'axios';

const api = axios.create({ baseURL: "http://localhost:3001" })

// ==================Auths===================//

export const signupUser = async (signupData) => {
    const userData = await api.post('/auth/signup', signupData);
    localStorage.setItem('authToken', userData.data.token);
    const userObject=getUserProfile() 
    return userObject;
}
export const loginUser = async (loginData) => {
    const userData = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', userData.data.token);
    const userObject=getUserProfile() 
    return userObject;


}
export const verifyUser = async() => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const userData = await api.get('/auth/verify');
        const userObject=getUserProfile()
        return userObject;  
    } else {
        return false;
    }
}

export const getUserProfile =async() => {
    const token =localStorage.getItem('authToken');
    if (token){
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const userData = await api.get('/user/profile');
        return userData.data;    
    } else {
        return false;
    }
}

//============POSTS============//
//Create POST//
//--> Route Post http://localhost:3001/post/

export const postPost= async(postData, cityId) => {
    const newPost = await api.post(`/post/${cityId}`, postData);
    console.log(newPost);
    return newPost;
}





//Get all POSTS
//---> GET---> http:// localhost:3001/post/all

export const indexPosts =async () => {
    const allPosts=await api.get(`/post/all`);
    console.log(allPosts);
    return allPosts.data;
}